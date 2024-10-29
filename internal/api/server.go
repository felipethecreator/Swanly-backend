package api

import (
	"log"

	"swanly/internal/handler"

	"github.com/gofiber/fiber/v2"
)

func SetupRoutes() {
	app := fiber.New()

	bodie := app.Group("/bodie")

	bodie.Get("/kappa", handler.GetKappaPride)

	bodie.Get("/", handler.HelloWorld)

	log.Fatal(app.Listen(":3000"))
}
