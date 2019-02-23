const collection = 'landpad';
const Query = {
  landpads: async (obj, { limit, offset }, context) => {
    const data = await context.db
      .collection(collection)
      .find(context.find({}))
      .skip(context.offset({ offset }))
      .limit(context.limit({ limit }))
      .toArray();
    return data;
  },
  landpad: async (obj, { id }, context) => {
    const [data] = await context.db
      .collection(collection)
      .find({ id })
      .limit(1)
      .toArray();
    return data;
  }
};

export default { Query };
