require 'open-uri'
require 'nokogiri'

urls = Array.new(10) {'https://appsignal.com'}

module Magique
  module Worker
    def self.included(base)
      base.extend(ClassMethods)
    end
  end

  module ClassMethods
    def perform_now(*args)
      new.perform(*args)
      p args
    end

    def perform_async(*args)
      Magique.backend.push(worker: self, args: args)
    end
  end

  class Processor
    def self.start(concurrency = 1)
      concurrency.times { |n| new("Processor #{n}")}
    end

    def initialize(name)
      thread = Thread.new do
        loop do
          payload = Magique.backend.pop
          worker_class = payload[:worker]
          worker_class.new.perform(*payload[:args])
        end
      end

      thread.name = name
    end
  end

  def perform(*)
    raise NotImplementedError
  end

  def self.backend
    @backend
  end

  def self.backend=(backend)
    @backend = backend
  end
end

Magique.backend = Queue.new

class TitleExtractService
  def call url
    document = Nokogiri::HTML(open(url))
    title = document.css('html > head > title').first.content
    puts "[#{Thread.current.name}] #{title.gsub(/[[:space:]]+/, ' ').strip}"
  rescue
    p "Unable to find title #{url}"
  end
end

class TitleExtractWorker
  include Magique::Worker

  def perform url
    document = Nokogiri::HTML(open(url))
    title = document.css('html > head > title').first.content
    puts "[#{Thread.current.name}] #{title.gsub(/[[:space:]]+/, ' ').strip}"
  rescue
    p "Unable to find title #{url}"
  end
end

begin_time = Time.now

urls.each do |url|
  TitleExtractWorker.perform_async(url)
  puts  Magique.backend.inspect
end

