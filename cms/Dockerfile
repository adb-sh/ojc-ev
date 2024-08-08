FROM denoland/deno:alpine as base

WORKDIR /app 

RUN apk fix && \
    apk --no-cache --update add git git-lfs gpg less openssh patch perl && \
    git lfs install

RUN git config --global --add safe.directory /app

ADD . .

# RUN deno cache _cms.serve.ts

EXPOSE 9000
CMD ["deno", "serve", "-A", "_cms.serve.ts"]

FROM base

# ADD ../ ./

# RUN deno cache _cms.serve.ts

RUN git config --global user.email "git@adb.sh" && \
    git config --global user.name "LumeCMS bot"
