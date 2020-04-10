FROM lambci/lambda:build-nodejs12.x
ENV LANG C.UTF-8

# serverless framework
RUN npm install -g serverless

WORKDIR /var/task
CMD ["/bin/bash"]
