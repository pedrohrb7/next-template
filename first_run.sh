#!/bin/bash

# Verificar e copiar o docker-compose.dev.yml
if [[ -f "docker-compose.dev.yml" ]]; then
    echo "O arquivo docker-compose.dev.yml já existe."
else
    cp docker-compose.dev.template.yml docker-compose.dev.yml
    echo "Arquivo docker-compose.dev.yml criado com sucesso."
fi

# Verificar e copiar o .env.local
if [[ -f ".env.local" ]]; then
    echo "O arquivo .env.local já existe."
else
    cp .env.template .env.local
    echo "Arquivo .env.local criado com sucesso."
fi
