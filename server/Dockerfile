FROM golang:1.13.1 as builder

WORKDIR /go/src/app

ENV GO111MODULE=on

RUN groupadd -g 10001 myapp &&\
    useradd -u 10001 -g myapp myapp

COPY go.mod go.sum ./

RUN go mod download

COPY . .

RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o /go/bin/app


FROM alpine:3.10

COPY --from=builder /go/bin/app /go/bin/app
COPY --from=builder /etc/group /etc/group
COPY --from=builder /etc/passwd /etc/passwd

EXPOSE 50051

USER myapp

ENTRYPOINT ["/go/bin/app"]
