import { Context, Hono } from "hono";
import { handle } from "hono/vercel";
import { AuthConfig, initAuthConfig } from "@hono/auth-js";

import ai from "./ai";
import users from "./users";
import images from "./images";
import projects from "./projects";
import verification from "./verification";
import branch from  './branch'
import account from './account'
import authConfig from "@/auth.config";

// Revert to "edge" if planning on running on the edge
export const runtime = "nodejs";

function getAuthConfig(c: Context): AuthConfig {
  return {
    ...authConfig,
  };
}

const app = new Hono().basePath("/api")


app.use("*", initAuthConfig(getAuthConfig));

const route = app.route("/users", users)
.route("/images", images)
.route("/projects", projects)
.route("/ai", ai)
.route("/verificationToken", verification)
.route("/branch", branch)
.route("/account", account);

 

export const GET = handle(app);
export const POST = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);

export type AppType = typeof route;
