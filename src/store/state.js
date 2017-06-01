var qs = (function (a) {
  if (a == "") return {};
  var b = {};
  for (var i = 0; i < a.length; ++i) {
    var p = a[i].split('=', 2);
    if (p.length == 1)
      b[p[0]] = "";
    else
      b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
  }
  return b;
})(window.location.search.substr(1).split('&'));

export default {
  film: {},
  filters: {
    genre_id: qs['genre_id'] || 0,
    available_hd: qs['available_hd'] || 0,
    decreased_hd: qs['decreased_hd'] || 0,
    available_hd_rent: qs['available_hd_rent'] || 0,
    decreased_hd_rent: qs['decreased_hd_rent'] || 0,
    available_sd: qs['available_sd'] || 0,
    decreased_sd: qs['decreased_sd'] || 0,
    available_sd_rent: qs['available_sd_rent'] || 0,
    decreased_sd_rent: qs['decreased_sd_rent'] || 0,
  },
  busy: false,
  films: [],
  pagination: {},
  settings: {},
}
