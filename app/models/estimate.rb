class Estimate
  STEPS = [10, 20, 30, 60, 90, 120].freeze

  SelectableEstimate = Struct.new(:minutes, :formatted)

  def self.to_select
    STEPS.map do |step|
      SelectableEstimate.new(step, format(step))
    end
  end

  def self.format(minutes)
    hours = (minutes.to_f / 60).floor
    minutes = minutes % 60

    result = ''
    result += "#{hours}h " if hours > 0

    result += "#{minutes}m" if minutes > 0

    result
  end

  def initialize(minutes)
    @minutes = minutes
  end

  def formatted
    self.class.format(@minutes)
  end

  def colors
    if @minutes <= 10
      %w[bg-green-200 text-green-500]
    elsif @minutes <= 20
      %w[bg-green-300 text-green-600]
    elsif @minutes <= 30
      %w[bg-blue-200 text-blue-500]
    elsif @minutes <= 60
      %w[bg-blue-300 text-blue-600]
    elsif @minutes <= 90
      %w[bg-yellow-200 text-yellow-600]
    else
      %w[bg-yellow-300 text-yellow-700]
    end
  end
end
