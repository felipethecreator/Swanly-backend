package handler

import (
	"github.com/gofiber/fiber/v2"
)

func GetKappaPride(ctx *fiber.Ctx) error {
	return ctx.SendString("Kappa Pride")
}

func HelloWorld(ctx *fiber.Ctx) error {
	return ctx.SendString("Hello World")
}
