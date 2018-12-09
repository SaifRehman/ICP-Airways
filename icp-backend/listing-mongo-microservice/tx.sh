time for i in {1..100}; do
    seq 1000 | parallel -n0 -j5  "curl -H 'Content-Type: application/json' https://10.150.20.151/listingsvc/healthz --insecure -m 1000"
  done