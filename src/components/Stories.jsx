const Stories = () => {
  return (
    <section id="stories" className="py-20 bg-black text-white text-center">
      <h2 className="text-3xl font-bold mb-6">Success Stories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        <div className="bg-gray-900 p-4 rounded-lg">Story 1</div>
        <div className="bg-gray-900 p-4 rounded-lg">Story 2</div>
        <div className="bg-gray-900 p-4 rounded-lg">Story 3</div>
      </div>
    </section>
  );
};

export default Stories;