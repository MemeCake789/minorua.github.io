olapp.loadProject(new olapp.Project({
  title: "飛び出せ ニッポン! (Beta)",
  description: "ブラウザで見ている地図がクリック1つで3D表示に! 地理院タイルの「標準地図」のほかに「色別標高図」や「写真」レイヤの表示が可能で3DモデルをSTLファイルに保存することも可能. 画像・地形データには地理院タイルを利用しています.",
  view: new ol.View({
    projection: "EPSG:3857",
    center: [15440013.373027043,4218373.287173401],
    maxZoom: 18,
    zoom: 5,
    enableRotation: false
  }),
  plugins: ["source/gsitiles.js"],
  init: undefined,
  layers: [
    {"options":{"visible":true,"opacity":1,"blendMode":"source-over","title":"標準地図"},"source":"GSITiles","layer":"std"},
    {"options":{"visible":false,"opacity":1,"blendMode":"multiply","title":"色別標高図"},"source":"GSITiles","layer":"relief"},
    {"options":{"visible":false,"opacity":1,"blendMode":"multiply","title":"写真"},"source":"GSITiles","layer":"ort"}
  ],
  sources: {
  },
  customLayers: {
  }
}));
