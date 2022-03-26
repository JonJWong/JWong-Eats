json.set! "transactions" do
  json.array! @transactions do |transaction|
      json.transactionId do
        transaction.id
      end

      json.set! "transactionItems" do
        json.array! 
      end
    end
  end
end