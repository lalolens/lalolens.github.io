# Makefile

.PHONY: all install build clean start

all: install build

install:
	cd lalolens.root && npm install

build:
	cd lalolens.root && npm run build

clean:
	cd lalolens.root && npm run clean

start:
	cd lalolens.root && npm run dev
