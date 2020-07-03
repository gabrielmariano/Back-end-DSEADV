export default async (req, res, next) => {
  try {
    if (!req.admin) {
      return res
        .status(401)
        .json({ error: 'Você não possuí credenciais administrativas' });
    }

    return next();
  } catch (err) {
    return res.status(401).json({ error: err.message });
  }
};
