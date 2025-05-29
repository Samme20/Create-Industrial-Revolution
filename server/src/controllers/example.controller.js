// Exempel data (ersätt med databas i en riktig implementation)
let examples = [
  { id: 1, name: 'Exempel 1', description: 'Detta är det första exemplet' },
  { id: 2, name: 'Exempel 2', description: 'Detta är det andra exemplet' }
];

// Hämta alla exempel
exports.getAllExamples = (req, res) => {
  res.json(examples);
};

// Hämta ett exempel med ID
exports.getExampleById = (req, res) => {
  const id = parseInt(req.params.id);
  const example = examples.find(ex => ex.id === id);
  
  if (!example) {
    return res.status(404).json({ message: 'Exempel hittades inte' });
  }
  
  res.json(example);
};

// Skapa ett nytt exempel
exports.createExample = (req, res) => {
  const { name, description } = req.body;
  
  if (!name || !description) {
    return res.status(400).json({ message: 'Namn och beskrivning krävs' });
  }
  
  const newId = examples.length > 0 ? Math.max(...examples.map(ex => ex.id)) + 1 : 1;
  
  const newExample = {
    id: newId,
    name,
    description
  };
  
  examples.push(newExample);
  
  res.status(201).json(newExample);
};

// Uppdatera ett exempel
exports.updateExample = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, description } = req.body;
  
  const exampleIndex = examples.findIndex(ex => ex.id === id);
  
  if (exampleIndex === -1) {
    return res.status(404).json({ message: 'Exempel hittades inte' });
  }
  
  const updatedExample = {
    ...examples[exampleIndex],
    name: name || examples[exampleIndex].name,
    description: description || examples[exampleIndex].description
  };
  
  examples[exampleIndex] = updatedExample;
  
  res.json(updatedExample);
};

// Ta bort ett exempel
exports.deleteExample = (req, res) => {
  const id = parseInt(req.params.id);
  
  const exampleIndex = examples.findIndex(ex => ex.id === id);
  
  if (exampleIndex === -1) {
    return res.status(404).json({ message: 'Exempel hittades inte' });
  }
  
  examples = examples.filter(ex => ex.id !== id);
  
  res.json({ message: 'Exempel borttaget' });
};