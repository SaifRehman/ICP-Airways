time for i in {1..100}; do
    seq 1000 | parallel -n0 -j5  "curl -H 'Content-Type: application/json' http://10.150.20.151:31380/listingsvc/healthz --insecure -m 1000"
  done