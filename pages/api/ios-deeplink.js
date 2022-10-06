// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const { pair } = req.query || {};

  res.writeHead(301, {
    location: `bnc://app.binance.com/trade/trade?at=spot&symbol=${pair}`,
  });
  res.end();
};
