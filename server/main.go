package main

import (
	"context"
	"log"
	"net"
	"time"

	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"

	pb "github.com/hamadakafu/vue-ts-practice/server/pb"
)

type HelloServer struct {
}

func (*HelloServer) OneHello(ctx context.Context, req *pb.Request) (*pb.Response, error) {
	return &pb.Response{
		Message: "Hello, " + req.Name,
	}, nil
}
func (*HelloServer) ManyHello(req *pb.Request, srv pb.Hello_ManyHelloServer) error {
	for i := 0; i < 5; i++ {
		if err := srv.Send(&pb.Response{
			Message: "Hello, " + req.Name,
		}); err != nil {
			return err
		}
		time.Sleep(time.Second)
	}
	return nil
}

func main() {
	lis, err := net.Listen("tcp", ":50051")
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	s := HelloServer{}

	grpcServer := grpc.NewServer()
	pb.RegisterHelloServer(grpcServer, &s)

	reflection.Register(grpcServer)

	if err := grpcServer.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
