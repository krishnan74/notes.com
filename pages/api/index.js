import { getSearch} from "@/lib/mongo/subject";
const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const {content, error} = await getSearch();
      if (error) throw new Error(error);
      return res.status(200).json({ content });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  res.setHeader("Allow", ["GET"]);
  res.status(425).end(`Method ${req.method} is not allowed`);
};
export default handler;
