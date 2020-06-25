const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    date: String,
    approved: Boolean,
    //Relacionamentos
    user:{//Usuários
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    spot:{//Local
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Spot'
    }
});

module.exports = mongoose.model('Booking', BookingSchema);