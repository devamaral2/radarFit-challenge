import mongoose from 'mongoose';

/* PetSchema will correspond to a collection in your MongoDB database. */
const ProductSchema = new mongoose.Schema({
  produto: {
    type: String,
    required: [true, 'Preencha o campo produto.'],
    maxlength: [60, 'Produto deve ter até 60 caracteres.'],
  },
  valor: {
    type: Number,
    required: [true, 'Preencha o campo valor.'],
    min: [0, 'Coloque um valor maior que zero.'],
  },
  descricao: {
    type: String,
    required: [true, 'Preencha o campo descricao.'],
  },
  favorite: Boolean,
  created: Date,
  updated: Date,
}, { versionKey: false });

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);
