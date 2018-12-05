time for i in {1..1000}; do
    seq 100 | parallel -n0 -j100  "curl https://10.150.20.151/listingsvc/listFlights --insecure -m 100"
  done