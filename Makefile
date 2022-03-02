init:
	pnpm install && \
	cd front && \
	pnpm install && \
	pnpm build && \
	cd .. && \
	cd gateway && \
	pnpm install

start:
	pnpm start && \
	docker-compose up -d

stop:
	pnpm stop && \
	docker-compose down

redis:
	rdcli
