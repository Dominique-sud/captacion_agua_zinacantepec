document.addEventListener('DOMContentLoaded', () => {
  try {
    if (!window.L) return console.error('Leaflet no se ha cargado correctamente.');

    const map = L.map('map').setView([19.284, -99.738], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    const zonas = [
      {
        nombre: "Zona Norte",
        coords: [
          [19.29, -99.75],
          [19.295, -99.75],
          [19.295, -99.74],
          [19.29, -99.74]
        ],
        color: "orange",
        tooltip: "🌦 Precipitación: 700 mm/año<br>💧 Escasez: Media"
      },
      {
        nombre: "Zona Sur",
        coords: [
          [19.278, -99.74],
          [19.283, -99.74],
          [19.283, -99.73],
          [19.278, -99.73]
        ],
        color: "green",
        tooltip: "🌧 Precipitación: 600 mm/año<br>💧 Escasez: Alta"
      }
    ];

    zonas.forEach(z => {
      const poly = L.polygon(z.coords, { color: z.color, fillOpacity: 0.4 }).addTo(map);
      poly.bindPopup(`<b>${z.nombre}</b><br>${z.tooltip}`);
    });

    const marker = L.marker([19.284, -99.738]).addTo(map);
    marker.bindPopup("<b>Zinacantepec</b><br>Centro del municipio").openPopup();

    const legend = L.control({ position: "bottomright" });
    legend.onAdd = function () {
      const div = L.DomUtil.create("div", "legend");
      div.innerHTML = `
        <b>Leyenda:</b><br>
        <span style="color:green;">■</span> Baja escasez<br>
        <span style="color:orange;">■</span> Media escasez<br>
      `;
      return div;
    };
    legend.addTo(map);

    console.log("✅ Mapa de Zinacantepec cargado correctamente");
  } catch (error) {
    console.error("Error al inicializar el mapa:", error);
  }
});
