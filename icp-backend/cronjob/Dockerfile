FROM ubuntu:latest

ENV DEBIAN_FRONTEND noninteractive
COPY . .
RUN apt-get update \
    && apt-get --no-install-recommends -y install \
    siege \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists 
RUN chmod +x run.sh
ENTRYPOINT [ "./run.sh" ]