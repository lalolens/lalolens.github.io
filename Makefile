# Makefile

.PHONY: all install build clean start

all: install build

install:
	cd lalolens && npm install

build:
	cd lalolens && npm run build

clean:
	cd lalolens && npm run clean

start:
	cd lalolens && npm run dev
