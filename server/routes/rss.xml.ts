import { Feed } from "feed";
import { serverQueryContent } from "#content/server";

const basePath = "https://373.3-mina.me";

export default defineEventHandler(async (event) => {
  const docs = await serverQueryContent(event, {
    only: ["title", "description", "_path", "createdAt"],
    sort: { createdAt: -1 },
    limit: 10,
  }).find();

  const feed = new Feed({
    title: "373.3",
    description:
      "webアプリケーション開発者。仕事ではフルスタック気味に従事。個人としてはHTMLとCSSが好き。",
    id: basePath,
    link: basePath,
    language: "ja",
    favicon: basePath + "/favicon.ico",
    copyright: "All rights reserved 2024, 373.3",
    feedLinks: {
      rss: basePath + "/rss.xml",
    },
    author: {
      name: "373.3",
      email: "mail@ryuhei.dev",
      link: basePath,
    },
  });

  docs.forEach((doc) => {
    feed.addItem({
      title: doc.title,
      id: basePath + doc._path,
      link: basePath + doc._path,
      description: doc.description,
      date: new Date(doc.createdAt),
    });
  });

  setHeader(event, "content-type", "text/xml");

  return feed.rss2();
});
