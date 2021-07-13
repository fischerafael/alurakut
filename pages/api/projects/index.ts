import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../../src/utils/database";

const projectHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  connectDB();

  return res.status(200).json({ message: "OK" });
};

export default projectHandler;
