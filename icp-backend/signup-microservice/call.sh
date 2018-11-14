time for i in {1..100}; do
    seq 10000 | parallel -n0 -j100  "curl http://169.61.62.89:31222/healthz -m 10000"
  done