const habitacionReservada = await Reservas.findOne({
    id: _id,
    fechaEntrada: { $lt: fechaSalida }, // La fecha de entrada es antes de la fecha de salida solicitada
    fechaSalida: { $gt: fechaEntrada }  // La fecha de salida es después de la fecha de entrada solicitada
});

if (habitacionReservada) {
    return res.status(400).json({ message: "La habitación no está disponible para las fechas seleccionadas." });
}