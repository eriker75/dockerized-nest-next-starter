# Makefile para gestionar Docker Compose y contenedores

# Variables
DEV_COMPOSE_FILE := compose.dev.yml
PROD_COMPOSE_FILE := compose.prod.yml

# Comandos para desarrollo
up-dev:
	docker-compose -f $(DEV_COMPOSE_FILE) up -d --build

down-dev:
	docker-compose -f $(DEV_COMPOSE_FILE) down -v

logs-dev:
	docker-compose -f $(DEV_COMPOSE_FILE) logs -f

# Comandos para producción
up-prod:
	docker-compose -f $(PROD_COMPOSE_FILE) up -d --build

down-prod:
	docker-compose -f $(PROD_COMPOSE_FILE) down -v

logs-prod:
	docker-compose -f $(PROD_COMPOSE_FILE) logs -f

# Comandos para contenedores individuales
shell-nest:
	docker exec -it nestjs-app /bin/sh

shell-next:
	docker exec -it nextjs-app /bin/sh

shell-mongo:
	docker exec -it mongo /bin/bash

shell-redis:
	docker exec -it redis /bin/sh

logs-app:
	docker logs -f nestjs-app

logs-mongo:
	docker logs -f mongo

logs-redis:
	docker logs -f redis

logs-nginx:
	docker logs -f nginx

# Comando por defecto
default: up-dev
