import 'dotenv/config';
import { get } from 'env-var';

export const envs = {
	PORT: get('PORT').required().asPortNumber(),
	SERVER_URL: get('SERVER_URL').required().asString(),

	POSTGRES_URL: get('POSTGRES_URL').required().asString(),
	POSTGRES_DB: get('POSTGRES_DB').required().asString(),

	JWT_SEED: get('JWT_SEED').required().asString(),

	SEND_EMAIL: get('SEND_EMAIL').default('false').asBool(),
	MAILER_SERVICE: get('MAILER_SERVICE').required().asString(),
	MAILER_EMAIL: get('MAILER_EMAIL').required().asString(),
	MAILER_SECRET_KEY: get('MAILER_SECRET_KEY').required().asString(),

	PUBLIC_VAPID_KEY: get('PUBLIC_VAPID_KEY').required().asString(),
	PRIVATE_VAPID_KEY: get('PRIVATE_VAPID_KEY').required().asString(),

	WEB_SERVICE_URL: get('WEB_SERVICE_URL').required().asString(),
};
