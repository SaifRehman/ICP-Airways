time for i in {1..100}; do
    seq 10000 | parallel -n0 -j1000  "curl http://158.175.115.86:30409/healthz -m 10000"
  done