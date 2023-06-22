import dotenv from "dotenv";
import { openai, streamText } from "modelfusion";

dotenv.config();

async function main() {
  const textStream = await stre