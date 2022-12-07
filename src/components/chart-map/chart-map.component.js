import React, { useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldHigh";
import am4geodata_albaniaLow from "@amcharts/amcharts4-geodata/albaniaLow";
import am4geodata_albaniaHigh from "@amcharts/amcharts4-geodata/albaniaHigh";
import am4geodata_algeriaLow from "@amcharts/amcharts4-geodata/algeriaLow";
import am4geodata_algeriaHigh from "@amcharts/amcharts4-geodata/algeriaHigh";
import am4geodata_americanSamoaLow from "@amcharts/amcharts4-geodata/americanSamoaLow";
import am4geodata_americanSamoaHigh from "@amcharts/amcharts4-geodata/americanSamoaHigh";
import am4geodata_andorraLow from "@amcharts/amcharts4-geodata/andorraLow";
import am4geodata_andorraHigh from "@amcharts/amcharts4-geodata/andorraHigh";
import am4geodata_afghanistanLow from "@amcharts/amcharts4-geodata/afghanistanLow";
import am4geodata_afghanistanHigh from "@amcharts/amcharts4-geodata/afghanistanHigh";
import am4geodata_angolaLow from "@amcharts/amcharts4-geodata/angolaLow";
import am4geodata_angolaHigh from "@amcharts/amcharts4-geodata/angolaHigh";
import am4geodata_anguillaLow from "@amcharts/amcharts4-geodata/anguillaLow";
import am4geodata_anguillaHigh from "@amcharts/amcharts4-geodata/anguillaHigh";
import am4geodata_antiguaBarbudaLow from "@amcharts/amcharts4-geodata/antiguaBarbudaLow";
import am4geodata_antiguaBarbudaHigh from "@amcharts/amcharts4-geodata/antiguaBarbudaHigh";
import am4geodata_argentinaLow from "@amcharts/amcharts4-geodata/argentinaLow";
import am4geodata_argentinaHigh from "@amcharts/amcharts4-geodata/argentinaHigh";
import am4geodata_armeniaLow from "@amcharts/amcharts4-geodata/armeniaLow";
import am4geodata_armeniaHigh from "@amcharts/amcharts4-geodata/armeniaHigh";
import am4geodata_arubaLow from "@amcharts/amcharts4-geodata/arubaLow";
import am4geodata_arubaHigh from "@amcharts/amcharts4-geodata/arubaHigh";
import am4geodata_australiaLow from "@amcharts/amcharts4-geodata/australiaLow";
import am4geodata_australiaHigh from "@amcharts/amcharts4-geodata/australiaHigh";
import am4geodata_austriaLow from "@amcharts/amcharts4-geodata/austriaLow";
import am4geodata_austriaHigh from "@amcharts/amcharts4-geodata/austriaHigh";
import am4geodata_azerbaijanLow from "@amcharts/amcharts4-geodata/azerbaijanLow";
import am4geodata_azerbaijanHigh from "@amcharts/amcharts4-geodata/azerbaijanHigh";
import am4geodata_bahrainLow from "@amcharts/amcharts4-geodata/bahrainLow";
import am4geodata_bahrainHigh from "@amcharts/amcharts4-geodata/bahrainHigh";
import am4geodata_bangladeshLow from "@amcharts/amcharts4-geodata/bangladeshLow";
import am4geodata_bangladeshHigh from "@amcharts/amcharts4-geodata/bangladeshHigh";
import am4geodata_barbadosLow from "@amcharts/amcharts4-geodata/barbadosLow";
import am4geodata_barbadosHigh from "@amcharts/amcharts4-geodata/barbadosHigh";
import am4geodata_belarusLow from "@amcharts/amcharts4-geodata/belarusLow";
import am4geodata_belarusHigh from "@amcharts/amcharts4-geodata/belarusHigh";
import am4geodata_belgiumLow from "@amcharts/amcharts4-geodata/belgiumLow";
import am4geodata_belgiumHigh from "@amcharts/amcharts4-geodata/belgiumHigh";
import am4geodata_belizeLow from "@amcharts/amcharts4-geodata/belizeLow";
import am4geodata_belizeHigh from "@amcharts/amcharts4-geodata/belizeHigh";
import am4geodata_beninLow from "@amcharts/amcharts4-geodata/beninLow";
import am4geodata_beninHigh from "@amcharts/amcharts4-geodata/beninHigh";
import am4geodata_bermudaLow from "@amcharts/amcharts4-geodata/bermudaLow";
import am4geodata_bermudaHigh from "@amcharts/amcharts4-geodata/bermudaHigh";
import am4geodata_bhutanLow from "@amcharts/amcharts4-geodata/bhutanLow";
import am4geodata_bhutanHigh from "@amcharts/amcharts4-geodata/bhutanHigh";
import am4geodata_boliviaLow from "@amcharts/amcharts4-geodata/boliviaLow";
import am4geodata_boliviaHigh from "@amcharts/amcharts4-geodata/boliviaHigh";
import am4geodata_bonaireSintEustatiusSabaLow from "@amcharts/amcharts4-geodata/bonaireSintEustatiusSabaLow";
import am4geodata_bonaireSintEustatiusSabaHigh from "@amcharts/amcharts4-geodata/bonaireSintEustatiusSabaHigh";
import am4geodata_bosniaHerzegovinaLow from "@amcharts/amcharts4-geodata/bosniaHerzegovinaLow";
import am4geodata_bosniaHerzegovinaHigh from "@amcharts/amcharts4-geodata/bosniaHerzegovinaHigh";
import am4geodata_botswanaLow from "@amcharts/amcharts4-geodata/botswanaLow";
import am4geodata_botswanaHigh from "@amcharts/amcharts4-geodata/botswanaHigh";
import am4geodata_brazilLow from "@amcharts/amcharts4-geodata/brazilLow";
import am4geodata_brazilHigh from "@amcharts/amcharts4-geodata/brazilHigh";
import am4geodata_britishIndianOceanTerritoryLow from "@amcharts/amcharts4-geodata/britishIndianOceanTerritoryLow";
import am4geodata_britishIndianOceanTerritoryHigh from "@amcharts/amcharts4-geodata/britishIndianOceanTerritoryHigh";
import am4geodata_britishVirginIslandsLow from "@amcharts/amcharts4-geodata/britishVirginIslandsLow";
import am4geodata_britishVirginIslandsHigh from "@amcharts/amcharts4-geodata/britishVirginIslandsHigh";
import am4geodata_bruneiDarussalamLow from "@amcharts/amcharts4-geodata/bruneiDarussalamLow";
import am4geodata_bruneiDarussalamHigh from "@amcharts/amcharts4-geodata/bruneiDarussalamHigh";
import am4geodata_bulgariaLow from "@amcharts/amcharts4-geodata/bulgariaLow";
import am4geodata_bulgariaHigh from "@amcharts/amcharts4-geodata/bulgariaHigh";
import am4geodata_burkinaFasoLow from "@amcharts/amcharts4-geodata/burkinaFasoLow";
import am4geodata_burkinaFasoHigh from "@amcharts/amcharts4-geodata/burkinaFasoHigh";
import am4geodata_burundiLow from "@amcharts/amcharts4-geodata/burundiLow";
import am4geodata_burundiHigh from "@amcharts/amcharts4-geodata/burundiHigh";
import am4geodata_bahamasLow from "@amcharts/amcharts4-geodata/bahamasLow";
import am4geodata_bahamasHigh from "@amcharts/amcharts4-geodata/bahamasHigh";
import am4geodata_cambodiaLow from "@amcharts/amcharts4-geodata/cambodiaLow";
import am4geodata_cambodiaHigh from "@amcharts/amcharts4-geodata/cambodiaHigh";
import am4geodata_cameroonLow from "@amcharts/amcharts4-geodata/cameroonLow";
import am4geodata_cameroonHigh from "@amcharts/amcharts4-geodata/cameroonHigh";
import am4geodata_canadaLow from "@amcharts/amcharts4-geodata/canadaLow";
import am4geodata_canadaHigh from "@amcharts/amcharts4-geodata/canadaHigh";
import am4geodata_caymanIslandsLow from "@amcharts/amcharts4-geodata/caymanIslandsLow";
import am4geodata_caymanIslandsHigh from "@amcharts/amcharts4-geodata/caymanIslandsHigh";
import am4geodata_capeVerdeLow from "@amcharts/amcharts4-geodata/capeVerdeLow";
import am4geodata_capeVerdeHigh from "@amcharts/amcharts4-geodata/capeVerdeHigh";
import am4geodata_centralAfricanRepublicLow from "@amcharts/amcharts4-geodata/centralAfricanRepublicLow";
import am4geodata_centralAfricanRepublicHigh from "@amcharts/amcharts4-geodata/centralAfricanRepublicHigh";
import am4geodata_chadLow from "@amcharts/amcharts4-geodata/chadLow";
import am4geodata_chadHigh from "@amcharts/amcharts4-geodata/chadHigh";
import am4geodata_channelIslandsLow from "@amcharts/amcharts4-geodata/channelIslandsLow";
import am4geodata_channelIslandsHigh from "@amcharts/amcharts4-geodata/channelIslandsHigh";
import am4geodata_chileLow from "@amcharts/amcharts4-geodata/chileLow";
import am4geodata_chileHigh from "@amcharts/amcharts4-geodata/chileHigh";
import am4geodata_chinaLow from "@amcharts/amcharts4-geodata/chinaLow";
import am4geodata_chinaHigh from "@amcharts/amcharts4-geodata/chinaHigh";
import am4geodata_cocosKeelingLow from "@amcharts/amcharts4-geodata/cocosKeelingLow";
import am4geodata_cocosKeelingHigh from "@amcharts/amcharts4-geodata/cocosKeelingHigh";
import am4geodata_colombiaLow from "@amcharts/amcharts4-geodata/colombiaLow";
import am4geodata_colombiaHigh from "@amcharts/amcharts4-geodata/colombiaHigh";
import am4geodata_comorosLow from "@amcharts/amcharts4-geodata/comorosLow";
import am4geodata_comorosHigh from "@amcharts/amcharts4-geodata/comorosHigh";
import am4geodata_congoDRLow from "@amcharts/amcharts4-geodata/congoDRLow";
import am4geodata_congoDRHigh from "@amcharts/amcharts4-geodata/congoDRHigh";
import am4geodata_congoLow from "@amcharts/amcharts4-geodata/congoLow";
import am4geodata_congoHigh from "@amcharts/amcharts4-geodata/congoHigh";
import am4geodata_costaRicaLow from "@amcharts/amcharts4-geodata/costaRicaLow";
import am4geodata_costaRicaHigh from "@amcharts/amcharts4-geodata/costaRicaHigh";
import am4geodata_cotedIvoireLow from "@amcharts/amcharts4-geodata/cotedIvoireLow";
import am4geodata_cotedIvoireHigh from "@amcharts/amcharts4-geodata/cotedIvoireHigh";
import am4geodata_croatiaLow from "@amcharts/amcharts4-geodata/croatiaLow";
import am4geodata_croatiaHigh from "@amcharts/amcharts4-geodata/croatiaHigh";
import am4geodata_curacaoLow from "@amcharts/amcharts4-geodata/curacaoLow";
import am4geodata_curacaoHigh from "@amcharts/amcharts4-geodata/curacaoHigh";
import am4geodata_cubaLow from "@amcharts/amcharts4-geodata/cubaLow";
import am4geodata_cubaHigh from "@amcharts/amcharts4-geodata/cubaHigh";
import am4geodata_cyprusLow from "@amcharts/amcharts4-geodata/cyprusLow";
import am4geodata_cyprusHigh from "@amcharts/amcharts4-geodata/cyprusHigh";
import am4geodata_czechiaLow from "@amcharts/amcharts4-geodata/czechiaLow";
import am4geodata_czechiaHigh from "@amcharts/amcharts4-geodata/czechiaHigh";
import am4geodata_denmarkLow from "@amcharts/amcharts4-geodata/denmarkLow";
import am4geodata_denmarkHigh from "@amcharts/amcharts4-geodata/denmarkHigh";
import am4geodata_djiboutiLow from "@amcharts/amcharts4-geodata/djiboutiLow";
import am4geodata_djiboutiHigh from "@amcharts/amcharts4-geodata/djiboutiHigh";
import am4geodata_dominicaLow from "@amcharts/amcharts4-geodata/dominicaLow";
import am4geodata_dominicaHigh from "@amcharts/amcharts4-geodata/dominicaHigh";
import am4geodata_dominicanRepublicLow from "@amcharts/amcharts4-geodata/dominicanRepublicLow";
import am4geodata_dominicanRepublicHigh from "@amcharts/amcharts4-geodata/dominicanRepublicHigh";
import am4geodata_ecuadorLow from "@amcharts/amcharts4-geodata/ecuadorLow";
import am4geodata_ecuadorHigh from "@amcharts/amcharts4-geodata/ecuadorHigh";
import am4geodata_egyptLow from "@amcharts/amcharts4-geodata/egyptLow";
import am4geodata_egyptHigh from "@amcharts/amcharts4-geodata/egyptHigh";
import am4geodata_elSalvadorLow from "@amcharts/amcharts4-geodata/elSalvadorLow";
import am4geodata_elSalvadorHigh from "@amcharts/amcharts4-geodata/elSalvadorHigh";
import am4geodata_equatorialGuineaLow from "@amcharts/amcharts4-geodata/equatorialGuineaLow";
import am4geodata_equatorialGuineaHigh from "@amcharts/amcharts4-geodata/equatorialGuineaHigh";
import am4geodata_eritreaLow from "@amcharts/amcharts4-geodata/eritreaLow";
import am4geodata_eritreaHigh from "@amcharts/amcharts4-geodata/eritreaHigh";
import am4geodata_estoniaLow from "@amcharts/amcharts4-geodata/estoniaLow";
import am4geodata_estoniaHigh from "@amcharts/amcharts4-geodata/estoniaHigh";
import am4geodata_eswatiniLow from "@amcharts/amcharts4-geodata/eswatiniLow";
import am4geodata_eswatiniHigh from "@amcharts/amcharts4-geodata/eswatiniHigh";
import am4geodata_ethiopiaLow from "@amcharts/amcharts4-geodata/ethiopiaLow";
import am4geodata_ethiopiaHigh from "@amcharts/amcharts4-geodata/ethiopiaHigh";
import am4geodata_falklandIslandsLow from "@amcharts/amcharts4-geodata/falklandIslandsLow";
import am4geodata_falklandIslandsHigh from "@amcharts/amcharts4-geodata/falklandIslandsHigh";
import am4geodata_faroeIslandsLow from "@amcharts/amcharts4-geodata/faroeIslandsLow";
import am4geodata_faroeIslandsHigh from "@amcharts/amcharts4-geodata/faroeIslandsHigh";
import am4geodata_fijiEastLow from "@amcharts/amcharts4-geodata/fijiEastLow";
import am4geodata_fijiEastHigh from "@amcharts/amcharts4-geodata/fijiEastHigh";
import am4geodata_finlandLow from "@amcharts/amcharts4-geodata/finlandLow";
import am4geodata_finlandHigh from "@amcharts/amcharts4-geodata/finlandHigh";
import am4geodata_franceLow from "@amcharts/amcharts4-geodata/franceLow";
import am4geodata_franceHigh from "@amcharts/amcharts4-geodata/franceHigh";
import am4geodata_frenchGuianaLow from "@amcharts/amcharts4-geodata/frenchGuianaLow";
import am4geodata_frenchGuianaHigh from "@amcharts/amcharts4-geodata/frenchGuianaHigh";
import am4geodata_gabonLow from "@amcharts/amcharts4-geodata/gabonLow";
import am4geodata_gabonHigh from "@amcharts/amcharts4-geodata/gabonHigh";
import am4geodata_grenadaLow from "@amcharts/amcharts4-geodata/grenadaLow";
import am4geodata_grenadaHigh from "@amcharts/amcharts4-geodata/grenadaHigh";
import am4geodata_georgiaLow from "@amcharts/amcharts4-geodata/georgiaLow";
import am4geodata_georgiaHigh from "@amcharts/amcharts4-geodata/georgiaHigh";
import am4geodata_germanyLow from "@amcharts/amcharts4-geodata/germanyLow";
import am4geodata_germanyHigh from "@amcharts/amcharts4-geodata/germanyHigh";
import am4geodata_greeceLow from "@amcharts/amcharts4-geodata/greeceLow";
import am4geodata_greeceHigh from "@amcharts/amcharts4-geodata/greeceHigh";
import am4geodata_greenlandLow from "@amcharts/amcharts4-geodata/greenlandLow";
import am4geodata_greenlandHigh from "@amcharts/amcharts4-geodata/greenlandHigh";
import am4geodata_gambiaLow from "@amcharts/amcharts4-geodata/gambiaLow";
import am4geodata_gambiaHigh from "@amcharts/amcharts4-geodata/gambiaHigh";
import am4geodata_ghanaLow from "@amcharts/amcharts4-geodata/ghanaLow";
import am4geodata_ghanaHigh from "@amcharts/amcharts4-geodata/ghanaHigh";
import am4geodata_guineaLow from "@amcharts/amcharts4-geodata/guineaLow";
import am4geodata_guineaHigh from "@amcharts/amcharts4-geodata/guineaHigh";
import am4geodata_guadeloupeLow from "@amcharts/amcharts4-geodata/guadeloupeLow";
import am4geodata_guadeloupeHigh from "@amcharts/amcharts4-geodata/guadeloupeHigh";
import am4geodata_guamLow from "@amcharts/amcharts4-geodata/guamLow";
import am4geodata_guamHigh from "@amcharts/amcharts4-geodata/guamHigh";
import am4geodata_guatemalaLow from "@amcharts/amcharts4-geodata/guatemalaLow";
import am4geodata_guatemalaHigh from "@amcharts/amcharts4-geodata/guatemalaHigh";
import am4geodata_guineaBissauLow from "@amcharts/amcharts4-geodata/guineaBissauLow";
import am4geodata_guineaBissauHigh from "@amcharts/amcharts4-geodata/guineaBissauHigh";
import am4geodata_guyanaLow from "@amcharts/amcharts4-geodata/guyanaLow";
import am4geodata_guyanaHigh from "@amcharts/amcharts4-geodata/guyanaHigh";
import am4geodata_hondurasLow from "@amcharts/amcharts4-geodata/hondurasLow";
import am4geodata_hondurasHigh from "@amcharts/amcharts4-geodata/hondurasHigh";
import am4geodata_hongKongLow from "@amcharts/amcharts4-geodata/hongKongLow";
import am4geodata_hongKongHigh from "@amcharts/amcharts4-geodata/hongKongHigh";
import am4geodata_haitiLow from "@amcharts/amcharts4-geodata/haitiLow";
import am4geodata_haitiHigh from "@amcharts/amcharts4-geodata/haitiHigh";
import am4geodata_hungaryLow from "@amcharts/amcharts4-geodata/hungaryLow";
import am4geodata_hungaryHigh from "@amcharts/amcharts4-geodata/hungaryHigh";
import am4geodata_icelandLow from "@amcharts/amcharts4-geodata/icelandLow";
import am4geodata_icelandHigh from "@amcharts/amcharts4-geodata/icelandHigh";
import am4geodata_india2020Low from "@amcharts/amcharts4-geodata/india2020Low";
import am4geodata_india2020High from "@amcharts/amcharts4-geodata/india2020High";
import am4geodata_indonesiaLow from "@amcharts/amcharts4-geodata/indonesiaLow";
import am4geodata_indonesiaHigh from "@amcharts/amcharts4-geodata/indonesiaHigh";
import am4geodata_irelandLow from "@amcharts/amcharts4-geodata/irelandLow";
import am4geodata_irelandHigh from "@amcharts/amcharts4-geodata/irelandHigh";
import am4geodata_israelLow from "@amcharts/amcharts4-geodata/israelLow";
import am4geodata_israelHigh from "@amcharts/amcharts4-geodata/israelHigh";
import am4geodata_italyLow from "@amcharts/amcharts4-geodata/italyLow";
import am4geodata_italyHigh from "@amcharts/amcharts4-geodata/italyHigh";
import am4geodata_iraqLow from "@amcharts/amcharts4-geodata/iraqLow";
import am4geodata_iraqHigh from "@amcharts/amcharts4-geodata/iraqHigh";
import am4geodata_iranLow from "@amcharts/amcharts4-geodata/iranLow";
import am4geodata_iranHigh from "@amcharts/amcharts4-geodata/iranHigh";
import am4geodata_jamaicaLow from "@amcharts/amcharts4-geodata/jamaicaLow";
import am4geodata_jamaicaHigh from "@amcharts/amcharts4-geodata/jamaicaHigh";
import am4geodata_jordanLow from "@amcharts/amcharts4-geodata/jordanLow";
import am4geodata_jordanHigh from "@amcharts/amcharts4-geodata/jordanHigh";
import am4geodata_japanLow from "@amcharts/amcharts4-geodata/japanLow";
import am4geodata_japanHigh from "@amcharts/amcharts4-geodata/japanHigh";
import am4geodata_kazakhstanLow from "@amcharts/amcharts4-geodata/kazakhstanLow";
import am4geodata_kazakhstanHigh from "@amcharts/amcharts4-geodata/kazakhstanHigh";
import am4geodata_kenyaLow from "@amcharts/amcharts4-geodata/kenyaLow";
import am4geodata_kenyaHigh from "@amcharts/amcharts4-geodata/kenyaHigh";
import am4geodata_kosovoLow from "@amcharts/amcharts4-geodata/kosovoLow";
import am4geodata_kosovoHigh from "@amcharts/amcharts4-geodata/kosovoHigh";
import am4geodata_kuwaitLow from "@amcharts/amcharts4-geodata/kuwaitLow";
import am4geodata_kuwaitHigh from "@amcharts/amcharts4-geodata/kuwaitHigh";
import am4geodata_kyrgyzstanLow from "@amcharts/amcharts4-geodata/kyrgyzstanLow";
import am4geodata_kyrgyzstanHigh from "@amcharts/amcharts4-geodata/kyrgyzstanHigh";
import am4geodata_laosLow from "@amcharts/amcharts4-geodata/laosLow";
import am4geodata_laosHigh from "@amcharts/amcharts4-geodata/laosHigh";
import am4geodata_lebanonLow from "@amcharts/amcharts4-geodata/lebanonLow";
import am4geodata_lebanonHigh from "@amcharts/amcharts4-geodata/lebanonHigh";
import am4geodata_liechtensteinLow from "@amcharts/amcharts4-geodata/liechtensteinLow";
import am4geodata_liechtensteinHigh from "@amcharts/amcharts4-geodata/liechtensteinHigh";
import am4geodata_lithuaniaLow from "@amcharts/amcharts4-geodata/lithuaniaLow";
import am4geodata_lithuaniaHigh from "@amcharts/amcharts4-geodata/lithuaniaHigh";
import am4geodata_luxembourgLow from "@amcharts/amcharts4-geodata/luxembourgLow";
import am4geodata_luxembourgHigh from "@amcharts/amcharts4-geodata/luxembourgHigh";
import am4geodata_libyaLow from "@amcharts/amcharts4-geodata/libyaLow";
import am4geodata_libyaHigh from "@amcharts/amcharts4-geodata/libyaHigh";
import am4geodata_madagascarProvinceLow from "@amcharts/amcharts4-geodata/madagascarProvinceLow";
import am4geodata_madagascarProvinceHigh from "@amcharts/amcharts4-geodata/madagascarProvinceHigh";
import am4geodata_malaysiaLow from "@amcharts/amcharts4-geodata/malaysiaLow";
import am4geodata_malaysiaHigh from "@amcharts/amcharts4-geodata/malaysiaHigh";
import am4geodata_mauritaniaLow from "@amcharts/amcharts4-geodata/mauritaniaLow";
import am4geodata_mauritaniaHigh from "@amcharts/amcharts4-geodata/mauritaniaHigh";
import am4geodata_maldivesLow from "@amcharts/amcharts4-geodata/maldivesLow";
import am4geodata_maldivesHigh from "@amcharts/amcharts4-geodata/maldivesHigh";
import am4geodata_malawiLow from "@amcharts/amcharts4-geodata/malawiLow";
import am4geodata_malawiHigh from "@amcharts/amcharts4-geodata/malawiHigh";
import am4geodata_maliLow from "@amcharts/amcharts4-geodata/maliLow";
import am4geodata_maliHigh from "@amcharts/amcharts4-geodata/maliHigh";
import am4geodata_maltaLow from "@amcharts/amcharts4-geodata/maltaLow";
import am4geodata_maltaHigh from "@amcharts/amcharts4-geodata/maltaHigh";
import am4geodata_mauritiusLow from "@amcharts/amcharts4-geodata/mauritiusLow";
import am4geodata_mauritiusHigh from "@amcharts/amcharts4-geodata/mauritiusHigh";
import am4geodata_mexicoLow from "@amcharts/amcharts4-geodata/mexicoLow";
import am4geodata_mexicoHigh from "@amcharts/amcharts4-geodata/mexicoHigh";
import am4geodata_moldovaLow from "@amcharts/amcharts4-geodata/moldovaLow";
import am4geodata_moldovaHigh from "@amcharts/amcharts4-geodata/moldovaHigh";
import am4geodata_mongoliaLow from "@amcharts/amcharts4-geodata/mongoliaLow";
import am4geodata_mongoliaHigh from "@amcharts/amcharts4-geodata/mongoliaHigh";
import am4geodata_moroccoLow from "@amcharts/amcharts4-geodata/moroccoLow";
import am4geodata_moroccoHigh from "@amcharts/amcharts4-geodata/moroccoHigh";
import am4geodata_montenegroLow from "@amcharts/amcharts4-geodata/montenegroLow";
import am4geodata_montenegroHigh from "@amcharts/amcharts4-geodata/montenegroHigh";
import am4geodata_mozambiqueLow from "@amcharts/amcharts4-geodata/mozambiqueLow";
import am4geodata_mozambiqueHigh from "@amcharts/amcharts4-geodata/mozambiqueHigh";
import am4geodata_northMacedoniaLow from "@amcharts/amcharts4-geodata/northMacedoniaLow";
import am4geodata_northMacedoniaHigh from "@amcharts/amcharts4-geodata/northMacedoniaHigh";
import am4geodata_myanmarLow from "@amcharts/amcharts4-geodata/myanmarLow";
import am4geodata_myanmarHigh from "@amcharts/amcharts4-geodata/myanmarHigh";
import am4geodata_northernMarianaLow from "@amcharts/amcharts4-geodata/northernMarianaLow";
import am4geodata_northernMarianaHigh from "@amcharts/amcharts4-geodata/northernMarianaHigh";
import am4geodata_martiniqueLow from "@amcharts/amcharts4-geodata/martiniqueLow";
import am4geodata_martiniqueHigh from "@amcharts/amcharts4-geodata/martiniqueHigh";
import am4geodata_montserratLow from "@amcharts/amcharts4-geodata/montserratLow";
import am4geodata_montserratHigh from "@amcharts/amcharts4-geodata/montserratHigh";
import am4geodata_namibiaLow from "@amcharts/amcharts4-geodata/namibiaLow";
import am4geodata_namibiaHigh from "@amcharts/amcharts4-geodata/namibiaHigh";
import am4geodata_nepalLow from "@amcharts/amcharts4-geodata/nepalLow";
import am4geodata_nepalHigh from "@amcharts/amcharts4-geodata/nepalHigh";
import am4geodata_netherlandsLow from "@amcharts/amcharts4-geodata/netherlandsLow";
import am4geodata_netherlandsHigh from "@amcharts/amcharts4-geodata/netherlandsHigh";
import am4geodata_newZealandLow from "@amcharts/amcharts4-geodata/newZealandLow";
import am4geodata_newZealandHigh from "@amcharts/amcharts4-geodata/newZealandHigh";
import am4geodata_nicaraguaLow from "@amcharts/amcharts4-geodata/nicaraguaLow";
import am4geodata_nicaraguaHigh from "@amcharts/amcharts4-geodata/nicaraguaHigh";
import am4geodata_nigerLow from "@amcharts/amcharts4-geodata/nigerLow";
import am4geodata_nigerHigh from "@amcharts/amcharts4-geodata/nigerHigh";
import am4geodata_nigeriaLow from "@amcharts/amcharts4-geodata/nigeriaLow";
import am4geodata_nigeriaHigh from "@amcharts/amcharts4-geodata/nigeriaHigh";
import am4geodata_northKoreaLow from "@amcharts/amcharts4-geodata/northKoreaLow";
import am4geodata_northKoreaHigh from "@amcharts/amcharts4-geodata/northKoreaHigh";
import am4geodata_norway2020Low from "@amcharts/amcharts4-geodata/norway2020Low";
import am4geodata_norway2020High from "@amcharts/amcharts4-geodata/norway2020High";
import am4geodata_omanLow from "@amcharts/amcharts4-geodata/omanLow";
import am4geodata_omanHigh from "@amcharts/amcharts4-geodata/omanHigh";
import am4geodata_pakistanLow from "@amcharts/amcharts4-geodata/pakistanLow";
import am4geodata_pakistanHigh from "@amcharts/amcharts4-geodata/pakistanHigh";
import am4geodata_palestineLow from "@amcharts/amcharts4-geodata/palestineLow";
import am4geodata_palestineHigh from "@amcharts/amcharts4-geodata/palestineHigh";
import am4geodata_panamaLow from "@amcharts/amcharts4-geodata/panamaLow";
import am4geodata_panamaHigh from "@amcharts/amcharts4-geodata/panamaHigh";
import am4geodata_peruLow from "@amcharts/amcharts4-geodata/peruLow";
import am4geodata_peruHigh from "@amcharts/amcharts4-geodata/peruHigh";
import am4geodata_philippinesLow from "@amcharts/amcharts4-geodata/philippinesLow";
import am4geodata_philippinesHigh from "@amcharts/amcharts4-geodata/philippinesHigh";
import am4geodata_polandLow from "@amcharts/amcharts4-geodata/polandLow";
import am4geodata_polandHigh from "@amcharts/amcharts4-geodata/polandHigh";
import am4geodata_portugalLow from "@amcharts/amcharts4-geodata/portugalLow";
import am4geodata_portugalHigh from "@amcharts/amcharts4-geodata/portugalHigh";
import am4geodata_puertoRicoLow from "@amcharts/amcharts4-geodata/puertoRicoLow";
import am4geodata_puertoRicoHigh from "@amcharts/amcharts4-geodata/puertoRicoHigh";
import am4geodata_paraguayLow from "@amcharts/amcharts4-geodata/paraguayLow";
import am4geodata_paraguayHigh from "@amcharts/amcharts4-geodata/paraguayHigh";
import am4geodata_qatarLow from "@amcharts/amcharts4-geodata/qatarLow";
import am4geodata_qatarHigh from "@amcharts/amcharts4-geodata/qatarHigh";
import am4geodata_romaniaLow from "@amcharts/amcharts4-geodata/romaniaLow";
import am4geodata_romaniaHigh from "@amcharts/amcharts4-geodata/romaniaHigh";
import am4geodata_russiaLow from "@amcharts/amcharts4-geodata/russiaLow";
import am4geodata_russiaHigh from "@amcharts/amcharts4-geodata/russiaHigh";
import am4geodata_rwandaLow from "@amcharts/amcharts4-geodata/rwandaLow";
import am4geodata_rwandaHigh from "@amcharts/amcharts4-geodata/rwandaHigh";
import am4geodata_saintHelenaLow from "@amcharts/amcharts4-geodata/saintHelenaLow";
import am4geodata_saintHelenaHigh from "@amcharts/amcharts4-geodata/saintHelenaHigh";
import am4geodata_saintLuciaLow from "@amcharts/amcharts4-geodata/saintLuciaLow";
import am4geodata_saintLuciaHigh from "@amcharts/amcharts4-geodata/saintLuciaHigh";
import am4geodata_saintVincentLow from "@amcharts/amcharts4-geodata/saintVincentLow";
import am4geodata_saintVincentHigh from "@amcharts/amcharts4-geodata/saintVincentHigh";
import am4geodata_samoaLow from "@amcharts/amcharts4-geodata/samoaLow";
import am4geodata_samoaHigh from "@amcharts/amcharts4-geodata/samoaHigh";
import am4geodata_sanMarinoLow from "@amcharts/amcharts4-geodata/sanMarinoLow";
import am4geodata_sanMarinoHigh from "@amcharts/amcharts4-geodata/sanMarinoHigh";
import am4geodata_southSudanLow from "@amcharts/amcharts4-geodata/southSudanLow";
import am4geodata_southSudanHigh from "@amcharts/amcharts4-geodata/southSudanHigh";
import am4geodata_saoTomePrincipeLow from "@amcharts/amcharts4-geodata/saoTomePrincipeLow";
import am4geodata_saoTomePrincipeHigh from "@amcharts/amcharts4-geodata/saoTomePrincipeHigh";
import am4geodata_saudiArabiaLow from "@amcharts/amcharts4-geodata/saudiArabiaLow";
import am4geodata_saudiArabiaHigh from "@amcharts/amcharts4-geodata/saudiArabiaHigh";
import am4geodata_senegalLow from "@amcharts/amcharts4-geodata/senegalLow";
import am4geodata_senegalHigh from "@amcharts/amcharts4-geodata/senegalHigh";
import am4geodata_serbiaLow from "@amcharts/amcharts4-geodata/serbiaLow";
import am4geodata_serbiaHigh from "@amcharts/amcharts4-geodata/serbiaHigh";
import am4geodata_seychellesLow from "@amcharts/amcharts4-geodata/seychellesLow";
import am4geodata_seychellesHigh from "@amcharts/amcharts4-geodata/seychellesHigh";
import am4geodata_sierraLeoneLow from "@amcharts/amcharts4-geodata/sierraLeoneLow";
import am4geodata_sierraLeoneHigh from "@amcharts/amcharts4-geodata/sierraLeoneHigh";
import am4geodata_singaporeLow from "@amcharts/amcharts4-geodata/singaporeLow";
import am4geodata_singaporeHigh from "@amcharts/amcharts4-geodata/singaporeHigh";
import am4geodata_slovakiaLow from "@amcharts/amcharts4-geodata/slovakiaLow";
import am4geodata_slovakiaHigh from "@amcharts/amcharts4-geodata/slovakiaHigh";
import am4geodata_sloveniaLow from "@amcharts/amcharts4-geodata/sloveniaLow";
import am4geodata_sloveniaHigh from "@amcharts/amcharts4-geodata/sloveniaHigh";
import am4geodata_solomonIslandsLow from "@amcharts/amcharts4-geodata/solomonIslandsLow";
import am4geodata_solomonIslandsHigh from "@amcharts/amcharts4-geodata/solomonIslandsHigh";
import am4geodata_somaliaLow from "@amcharts/amcharts4-geodata/somaliaLow";
import am4geodata_somaliaHigh from "@amcharts/amcharts4-geodata/somaliaHigh";
import am4geodata_southAfricaLow from "@amcharts/amcharts4-geodata/southAfricaLow";
import am4geodata_southAfricaHigh from "@amcharts/amcharts4-geodata/southAfricaHigh";
import am4geodata_southKoreaLow from "@amcharts/amcharts4-geodata/southKoreaLow";
import am4geodata_southKoreaHigh from "@amcharts/amcharts4-geodata/southKoreaHigh";
import am4geodata_spainLow from "@amcharts/amcharts4-geodata/spainLow";
import am4geodata_spainHigh from "@amcharts/amcharts4-geodata/spainHigh";
import am4geodata_sriLankaLow from "@amcharts/amcharts4-geodata/sriLankaLow";
import am4geodata_sriLankaHigh from "@amcharts/amcharts4-geodata/sriLankaHigh";
import am4geodata_liberiaLow from "@amcharts/amcharts4-geodata/liberiaLow";
import am4geodata_liberiaHigh from "@amcharts/amcharts4-geodata/liberiaHigh";
import am4geodata_lesothoLow from "@amcharts/amcharts4-geodata/lesothoLow";
import am4geodata_lesothoHigh from "@amcharts/amcharts4-geodata/lesothoHigh";
import am4geodata_stKittsNevisLow from "@amcharts/amcharts4-geodata/stKittsNevisLow";
import am4geodata_stKittsNevisHigh from "@amcharts/amcharts4-geodata/stKittsNevisHigh";
import am4geodata_stPierreMiquelonLow from "@amcharts/amcharts4-geodata/stPierreMiquelonLow";
import am4geodata_stPierreMiquelonHigh from "@amcharts/amcharts4-geodata/stPierreMiquelonHigh";
import am4geodata_sudanLow from "@amcharts/amcharts4-geodata/sudanLow";
import am4geodata_sudanHigh from "@amcharts/amcharts4-geodata/sudanHigh";
import am4geodata_surinameLow from "@amcharts/amcharts4-geodata/surinameLow";
import am4geodata_surinameHigh from "@amcharts/amcharts4-geodata/surinameHigh";
import am4geodata_svalbardLow from "@amcharts/amcharts4-geodata/svalbardLow";
import am4geodata_svalbardHigh from "@amcharts/amcharts4-geodata/svalbardHigh";
import am4geodata_swedenLow from "@amcharts/amcharts4-geodata/swedenLow";
import am4geodata_swedenHigh from "@amcharts/amcharts4-geodata/swedenHigh";
import am4geodata_switzerlandLow from "@amcharts/amcharts4-geodata/switzerlandLow";
import am4geodata_switzerlandHigh from "@amcharts/amcharts4-geodata/switzerlandHigh";
import am4geodata_syriaLow from "@amcharts/amcharts4-geodata/syriaLow";
import am4geodata_syriaHigh from "@amcharts/amcharts4-geodata/syriaHigh";
import am4geodata_tajikistanLow from "@amcharts/amcharts4-geodata/tajikistanLow";
import am4geodata_tajikistanHigh from "@amcharts/amcharts4-geodata/tajikistanHigh";
import am4geodata_timorLesteLow from "@amcharts/amcharts4-geodata/timorLesteLow";
import am4geodata_timorLesteHigh from "@amcharts/amcharts4-geodata/timorLesteHigh";
import am4geodata_tanzaniaLow from "@amcharts/amcharts4-geodata/tanzaniaLow";
import am4geodata_tanzaniaHigh from "@amcharts/amcharts4-geodata/tanzaniaHigh";
import am4geodata_thailandLow from "@amcharts/amcharts4-geodata/thailandLow";
import am4geodata_thailandHigh from "@amcharts/amcharts4-geodata/thailandHigh";
import am4geodata_togoLow from "@amcharts/amcharts4-geodata/togoLow";
import am4geodata_togoHigh from "@amcharts/amcharts4-geodata/togoHigh";
import am4geodata_tunisiaLow from "@amcharts/amcharts4-geodata/tunisiaLow";
import am4geodata_tunisiaHigh from "@amcharts/amcharts4-geodata/tunisiaHigh";
import am4geodata_turkeyLow from "@amcharts/amcharts4-geodata/turkeyLow";
import am4geodata_turkeyHigh from "@amcharts/amcharts4-geodata/turkeyHigh";
import am4geodata_turkmenistanLow from "@amcharts/amcharts4-geodata/turkmenistanLow";
import am4geodata_turkmenistanHigh from "@amcharts/amcharts4-geodata/turkmenistanHigh";
import am4geodata_trinidadTobagoLow from "@amcharts/amcharts4-geodata/trinidadTobagoLow";
import am4geodata_trinidadTobagoHigh from "@amcharts/amcharts4-geodata/trinidadTobagoHigh";
import am4geodata_taiwanLow from "@amcharts/amcharts4-geodata/taiwanLow";
import am4geodata_taiwanHigh from "@amcharts/amcharts4-geodata/taiwanHigh";
import am4geodata_uaeLow from "@amcharts/amcharts4-geodata/uaeLow";
import am4geodata_uaeHigh from "@amcharts/amcharts4-geodata/uaeHigh";
import am4geodata_ukLow from "@amcharts/amcharts4-geodata/ukLow";
import am4geodata_ukHigh from "@amcharts/amcharts4-geodata/ukHigh";
import am4geodata_ukraineLow from "@amcharts/amcharts4-geodata/ukraineLow";
import am4geodata_ukraineHigh from "@amcharts/amcharts4-geodata/ukraineHigh";
import am4geodata_ugandaLow from "@amcharts/amcharts4-geodata/ugandaLow";
import am4geodata_ugandaHigh from "@amcharts/amcharts4-geodata/ugandaHigh";
import am4geodata_usaLow from "@amcharts/amcharts4-geodata/usaLow";
import am4geodata_usaHigh from "@amcharts/amcharts4-geodata/usaHigh";
import am4geodata_uruguayLow from "@amcharts/amcharts4-geodata/uruguayLow";
import am4geodata_uruguayHigh from "@amcharts/amcharts4-geodata/uruguayHigh";
import am4geodata_uzbekistanLow from "@amcharts/amcharts4-geodata/uzbekistanLow";
import am4geodata_uzbekistanHigh from "@amcharts/amcharts4-geodata/uzbekistanHigh";
import am4geodata_vaticanLow from "@amcharts/amcharts4-geodata/vaticanLow";
import am4geodata_vaticanHigh from "@amcharts/amcharts4-geodata/vaticanHigh";
import am4geodata_venezuelaLow from "@amcharts/amcharts4-geodata/venezuelaLow";
import am4geodata_venezuelaHigh from "@amcharts/amcharts4-geodata/venezuelaHigh";
import am4geodata_usVirginIslandsLow from "@amcharts/amcharts4-geodata/usVirginIslandsLow";
import am4geodata_usVirginIslandsHigh from "@amcharts/amcharts4-geodata/usVirginIslandsHigh";
import am4geodata_vietnamLow from "@amcharts/amcharts4-geodata/vietnamLow";
import am4geodata_vietnamHigh from "@amcharts/amcharts4-geodata/vietnamHigh";
import am4geodata_yemenLow from "@amcharts/amcharts4-geodata/yemenLow";
import am4geodata_yemenHigh from "@amcharts/amcharts4-geodata/yemenHigh";
import am4geodata_zambiaLow from "@amcharts/amcharts4-geodata/zambiaLow";
import am4geodata_zambiaHigh from "@amcharts/amcharts4-geodata/zambiaHigh";
import am4geodata_zimbabweLow from "@amcharts/amcharts4-geodata/zimbabweLow";
import am4geodata_zimbabweHigh from "@amcharts/amcharts4-geodata/zimbabweHigh";
import am4geodata_latvia2021Low from "@amcharts/amcharts4-geodata/latvia2021Low";
import am4geodata_latvia2021High from "@amcharts/amcharts4-geodata/latvia2021High";

am4core.useTheme(am4themes_animated);

const data_list = {
  AL: {
    low: am4geodata_albaniaLow,
    high: am4geodata_albaniaHigh,
  },
  DZ: {
    low: am4geodata_algeriaLow,
    high: am4geodata_algeriaHigh,
  },
  AS: {
    low: am4geodata_americanSamoaLow,
    high: am4geodata_americanSamoaHigh,
  },
  AD: {
    low: am4geodata_andorraLow,
    high: am4geodata_andorraHigh,
  },
  AF: {
    low: am4geodata_afghanistanLow,
    high: am4geodata_afghanistanHigh,
  },
  AO: {
    low: am4geodata_angolaLow,
    high: am4geodata_angolaHigh,
  },
  AI: {
    low: am4geodata_anguillaLow,
    high: am4geodata_anguillaHigh,
  },
  AG: {
    low: am4geodata_antiguaBarbudaLow,
    high: am4geodata_antiguaBarbudaHigh,
  },
  AR: {
    low: am4geodata_argentinaLow,
    high: am4geodata_argentinaHigh,
  },
  AM: {
    low: am4geodata_armeniaLow,
    high: am4geodata_armeniaHigh,
  },
  AW: {
    low: am4geodata_arubaLow,
    high: am4geodata_arubaHigh,
  },
  AU: {
    low: am4geodata_australiaLow,
    high: am4geodata_australiaHigh,
  },
  AT: {
    low: am4geodata_austriaLow,
    high: am4geodata_austriaHigh,
  },
  AZ: {
    low: am4geodata_azerbaijanLow,
    high: am4geodata_azerbaijanHigh,
  },
  BH: {
    low: am4geodata_bahrainLow,
    high: am4geodata_bahrainHigh,
  },
  BD: {
    low: am4geodata_bangladeshLow,
    high: am4geodata_bangladeshHigh,
  },
  BB: {
    low: am4geodata_barbadosLow,
    high: am4geodata_barbadosHigh,
  },
  BY: {
    low: am4geodata_belarusLow,
    high: am4geodata_belarusHigh,
  },
  BE: {
    low: am4geodata_belgiumLow,
    high: am4geodata_belgiumHigh,
  },
  BZ: {
    low: am4geodata_belizeLow,
    high: am4geodata_belizeHigh,
  },
  BJ: {
    low: am4geodata_beninLow,
    high: am4geodata_beninHigh,
  },
  BM: {
    low: am4geodata_bermudaLow,
    high: am4geodata_bermudaHigh,
  },
  BT: {
    low: am4geodata_bhutanLow,
    high: am4geodata_bhutanHigh,
  },
  BO: {
    low: am4geodata_boliviaLow,
    high: am4geodata_boliviaHigh,
  },
  BQ: {
    low: am4geodata_bonaireSintEustatiusSabaLow,
    high: am4geodata_bonaireSintEustatiusSabaHigh,
  },
  BA: {
    low: am4geodata_bosniaHerzegovinaLow,
    high: am4geodata_bosniaHerzegovinaHigh,
  },
  BW: {
    low: am4geodata_botswanaLow,
    high: am4geodata_botswanaHigh,
  },
  BR: {
    low: am4geodata_brazilLow,
    high: am4geodata_brazilHigh,
  },
  IO: {
    low: am4geodata_britishIndianOceanTerritoryLow,
    high: am4geodata_britishIndianOceanTerritoryHigh,
  },
  VG: {
    low: am4geodata_britishVirginIslandsLow,
    high: am4geodata_britishVirginIslandsHigh,
  },
  BN: {
    low: am4geodata_bruneiDarussalamLow,
    high: am4geodata_bruneiDarussalamHigh,
  },
  BG: {
    low: am4geodata_bulgariaLow,
    high: am4geodata_bulgariaHigh,
  },
  BF: {
    low: am4geodata_burkinaFasoLow,
    high: am4geodata_burkinaFasoHigh,
  },
  BI: {
    low: am4geodata_burundiLow,
    high: am4geodata_burundiHigh,
  },
  BS: {
    low: am4geodata_bahamasLow,
    high: am4geodata_bahamasHigh,
  },
  KH: {
    low: am4geodata_cambodiaLow,
    high: am4geodata_cambodiaHigh,
  },
  CM: {
    low: am4geodata_cameroonLow,
    high: am4geodata_cameroonHigh,
  },
  CA: {
    low: am4geodata_canadaLow,
    high: am4geodata_canadaHigh,
  },
  KY: {
    low: am4geodata_caymanIslandsLow,
    high: am4geodata_caymanIslandsHigh,
  },
  CV: {
    low: am4geodata_capeVerdeLow,
    high: am4geodata_capeVerdeHigh,
  },
  CF: {
    low: am4geodata_centralAfricanRepublicLow,
    high: am4geodata_centralAfricanRepublicHigh,
  },
  TD: {
    low: am4geodata_chadLow,
    high: am4geodata_chadHigh,
  },
  "GB-CHA": {
    low: am4geodata_channelIslandsLow,
    high: am4geodata_channelIslandsHigh,
  },
  CL: {
    low: am4geodata_chileLow,
    high: am4geodata_chileHigh,
  },
  CN: {
    low: am4geodata_chinaLow,
    high: am4geodata_chinaHigh,
  },
  CC: {
    low: am4geodata_cocosKeelingLow,
    high: am4geodata_cocosKeelingHigh,
  },
  CO: {
    low: am4geodata_colombiaLow,
    high: am4geodata_colombiaHigh,
  },
  KM: {
    low: am4geodata_comorosLow,
    high: am4geodata_comorosHigh,
  },
  CD: {
    low: am4geodata_congoDRLow,
    high: am4geodata_congoDRHigh,
  },
  CG: {
    low: am4geodata_congoLow,
    high: am4geodata_congoHigh,
  },
  CR: {
    low: am4geodata_costaRicaLow,
    high: am4geodata_costaRicaHigh,
  },
  CI: {
    low: am4geodata_cotedIvoireLow,
    high: am4geodata_cotedIvoireHigh,
  },
  HR: {
    low: am4geodata_croatiaLow,
    high: am4geodata_croatiaHigh,
  },
  CW: {
    low: am4geodata_curacaoLow,
    high: am4geodata_curacaoHigh,
  },
  CU: {
    low: am4geodata_cubaLow,
    high: am4geodata_cubaHigh,
  },
  CY: {
    low: am4geodata_cyprusLow,
    high: am4geodata_cyprusHigh,
  },
  CZ: {
    low: am4geodata_czechiaLow,
    high: am4geodata_czechiaHigh,
  },
  DK: {
    low: am4geodata_denmarkLow,
    high: am4geodata_denmarkHigh,
  },
  DJ: {
    low: am4geodata_djiboutiLow,
    high: am4geodata_djiboutiHigh,
  },
  DM: {
    low: am4geodata_dominicaLow,
    high: am4geodata_dominicaHigh,
  },
  DO: {
    low: am4geodata_dominicanRepublicLow,
    high: am4geodata_dominicanRepublicHigh,
  },
  EC: {
    low: am4geodata_ecuadorLow,
    high: am4geodata_ecuadorHigh,
  },
  EG: {
    low: am4geodata_egyptLow,
    high: am4geodata_egyptHigh,
  },
  SV: {
    low: am4geodata_elSalvadorLow,
    high: am4geodata_elSalvadorHigh,
  },
  GQ: {
    low: am4geodata_equatorialGuineaLow,
    high: am4geodata_equatorialGuineaHigh,
  },
  ER: {
    low: am4geodata_eritreaLow,
    high: am4geodata_eritreaHigh,
  },
  EE: {
    low: am4geodata_estoniaLow,
    high: am4geodata_estoniaHigh,
  },
  SZ: {
    low: am4geodata_eswatiniLow,
    high: am4geodata_eswatiniHigh,
  },
  ET: {
    low: am4geodata_ethiopiaLow,
    high: am4geodata_ethiopiaHigh,
  },
  FK: {
    low: am4geodata_falklandIslandsLow,
    high: am4geodata_falklandIslandsHigh,
  },
  FO: {
    low: am4geodata_faroeIslandsLow,
    high: am4geodata_faroeIslandsHigh,
  },
  FJ: {
    low: am4geodata_fijiEastLow,
    high: am4geodata_fijiEastHigh,
  },
  FI: {
    low: am4geodata_finlandLow,
    high: am4geodata_finlandHigh,
  },
  FR: {
    low: am4geodata_franceLow,
    high: am4geodata_franceHigh,
  },
  GF: {
    low: am4geodata_frenchGuianaLow,
    high: am4geodata_frenchGuianaHigh,
  },
  GA: {
    low: am4geodata_gabonLow,
    high: am4geodata_gabonHigh,
  },
  GD: {
    low: am4geodata_grenadaLow,
    high: am4geodata_grenadaHigh,
  },
  GE: {
    low: am4geodata_georgiaLow,
    high: am4geodata_georgiaHigh,
  },
  DE: {
    low: am4geodata_germanyLow,
    high: am4geodata_germanyHigh,
  },
  GR: {
    low: am4geodata_greeceLow,
    high: am4geodata_greeceHigh,
  },
  GL: {
    low: am4geodata_greenlandLow,
    high: am4geodata_greenlandHigh,
  },
  GM: {
    low: am4geodata_gambiaLow,
    high: am4geodata_gambiaHigh,
  },
  GH: {
    low: am4geodata_ghanaLow,
    high: am4geodata_ghanaHigh,
  },
  GN: {
    low: am4geodata_guineaLow,
    high: am4geodata_guineaHigh,
  },
  GP: {
    low: am4geodata_guadeloupeLow,
    high: am4geodata_guadeloupeHigh,
  },
  GU: {
    low: am4geodata_guamLow,
    high: am4geodata_guamHigh,
  },
  GT: {
    low: am4geodata_guatemalaLow,
    high: am4geodata_guatemalaHigh,
  },
  GW: {
    low: am4geodata_guineaBissauLow,
    high: am4geodata_guineaBissauHigh,
  },
  GY: {
    low: am4geodata_guyanaLow,
    high: am4geodata_guyanaHigh,
  },
  HN: {
    low: am4geodata_hondurasLow,
    high: am4geodata_hondurasHigh,
  },
  HK: {
    low: am4geodata_hongKongLow,
    high: am4geodata_hongKongHigh,
  },
  HT: {
    low: am4geodata_haitiLow,
    high: am4geodata_haitiHigh,
  },
  HU: {
    low: am4geodata_hungaryLow,
    high: am4geodata_hungaryHigh,
  },
  IS: {
    low: am4geodata_icelandLow,
    high: am4geodata_icelandHigh,
  },
  IN: {
    low: am4geodata_india2020Low,
    high: am4geodata_india2020High,
  },
  ID: {
    low: am4geodata_indonesiaLow,
    high: am4geodata_indonesiaHigh,
  },
  IE: {
    low: am4geodata_irelandLow,
    high: am4geodata_irelandHigh,
  },
  IL: {
    low: am4geodata_israelLow,
    high: am4geodata_israelHigh,
  },
  IT: {
    low: am4geodata_italyLow,
    high: am4geodata_italyHigh,
  },
  JE: {
    low: am4geodata_channelIslandsLow,
    high: am4geodata_channelIslandsHigh,
  },
  IQ: {
    low: am4geodata_iraqLow,
    high: am4geodata_iraqHigh,
  },
  IR: {
    low: am4geodata_iranLow,
    high: am4geodata_iranHigh,
  },
  JM: {
    low: am4geodata_jamaicaLow,
    high: am4geodata_jamaicaHigh,
  },
  JO: {
    low: am4geodata_jordanLow,
    high: am4geodata_jordanHigh,
  },
  JP: {
    low: am4geodata_japanLow,
    high: am4geodata_japanHigh,
  },
  KZ: {
    low: am4geodata_kazakhstanLow,
    high: am4geodata_kazakhstanHigh,
  },
  KE: {
    low: am4geodata_kenyaLow,
    high: am4geodata_kenyaHigh,
  },
  XK: {
    low: am4geodata_kosovoLow,
    high: am4geodata_kosovoHigh,
  },
  KW: {
    low: am4geodata_kuwaitLow,
    high: am4geodata_kuwaitHigh,
  },
  KG: {
    low: am4geodata_kyrgyzstanLow,
    high: am4geodata_kyrgyzstanHigh,
  },
  LA: {
    low: am4geodata_laosLow,
    high: am4geodata_laosHigh,
  },
  LB: {
    low: am4geodata_lebanonLow,
    high: am4geodata_lebanonHigh,
  },
  LV: {
    low: am4geodata_latvia2021Low,
    high: am4geodata_latvia2021High,
  },
  LI: {
    low: am4geodata_liechtensteinLow,
    high: am4geodata_liechtensteinHigh,
  },
  LT: {
    low: am4geodata_lithuaniaLow,
    high: am4geodata_lithuaniaHigh,
  },
  LU: {
    low: am4geodata_luxembourgLow,
    high: am4geodata_luxembourgHigh,
  },
  LY: {
    low: am4geodata_libyaLow,
    high: am4geodata_libyaHigh,
  },
  MG: {
    low: am4geodata_madagascarProvinceLow,
    high: am4geodata_madagascarProvinceHigh,
  },
  MY: {
    low: am4geodata_malaysiaLow,
    high: am4geodata_malaysiaHigh,
  },
  MR: {
    low: am4geodata_mauritaniaLow,
    high: am4geodata_mauritaniaHigh,
  },
  MV: {
    low: am4geodata_maldivesLow,
    high: am4geodata_maldivesHigh,
  },
  MW: {
    low: am4geodata_malawiLow,
    high: am4geodata_malawiHigh,
  },
  ML: {
    low: am4geodata_maliLow,
    high: am4geodata_maliHigh,
  },
  MT: {
    low: am4geodata_maltaLow,
    high: am4geodata_maltaHigh,
  },
  MU: {
    low: am4geodata_mauritiusLow,
    high: am4geodata_mauritiusHigh,
  },
  MX: {
    low: am4geodata_mexicoLow,
    high: am4geodata_mexicoHigh,
  },
  MD: {
    low: am4geodata_moldovaLow,
    high: am4geodata_moldovaHigh,
  },
  MN: {
    low: am4geodata_mongoliaLow,
    high: am4geodata_mongoliaHigh,
  },
  MA: {
    low: am4geodata_moroccoLow,
    high: am4geodata_moroccoHigh,
  },
  ME: {
    low: am4geodata_montenegroLow,
    high: am4geodata_montenegroHigh,
  },
  MZ: {
    low: am4geodata_mozambiqueLow,
    high: am4geodata_mozambiqueHigh,
  },
  MK: {
    low: am4geodata_northMacedoniaLow,
    high: am4geodata_northMacedoniaHigh,
  },
  MM: {
    low: am4geodata_myanmarLow,
    high: am4geodata_myanmarHigh,
  },
  MP: {
    low: am4geodata_northernMarianaLow,
    high: am4geodata_northernMarianaHigh,
  },
  MQ: {
    low: am4geodata_martiniqueLow,
    high: am4geodata_martiniqueHigh,
  },
  MS: {
    low: am4geodata_montserratLow,
    high: am4geodata_montserratHigh,
  },
  NA: {
    low: am4geodata_namibiaLow,
    high: am4geodata_namibiaHigh,
  },
  NP: {
    low: am4geodata_nepalLow,
    high: am4geodata_nepalHigh,
  },
  NL: {
    low: am4geodata_netherlandsLow,
    high: am4geodata_netherlandsHigh,
  },
  NZ: {
    low: am4geodata_newZealandLow,
    high: am4geodata_newZealandHigh,
  },
  NI: {
    low: am4geodata_nicaraguaLow,
    high: am4geodata_nicaraguaHigh,
  },
  NE: {
    low: am4geodata_nigerLow,
    high: am4geodata_nigerHigh,
  },
  NG: {
    low: am4geodata_nigeriaLow,
    high: am4geodata_nigeriaHigh,
  },
  KP: {
    low: am4geodata_northKoreaLow,
    high: am4geodata_northKoreaHigh,
  },
  NO: {
    low: am4geodata_norway2020Low,
    high: am4geodata_norway2020High,
  },
  OM: {
    low: am4geodata_omanLow,
    high: am4geodata_omanHigh,
  },
  PK: {
    low: am4geodata_pakistanLow,
    high: am4geodata_pakistanHigh,
  },
  PS: {
    low: am4geodata_palestineLow,
    high: am4geodata_palestineHigh,
  },
  PA: {
    low: am4geodata_panamaLow,
    high: am4geodata_panamaHigh,
  },
  PE: {
    low: am4geodata_peruLow,
    high: am4geodata_peruHigh,
  },
  PH: {
    low: am4geodata_philippinesLow,
    high: am4geodata_philippinesHigh,
  },
  PL: {
    low: am4geodata_polandLow,
    high: am4geodata_polandHigh,
  },
  PT: {
    low: am4geodata_portugalLow,
    high: am4geodata_portugalHigh,
  },
  PR: {
    low: am4geodata_puertoRicoLow,
    high: am4geodata_puertoRicoHigh,
  },
  PY: {
    low: am4geodata_paraguayLow,
    high: am4geodata_paraguayHigh,
  },
  QA: {
    low: am4geodata_qatarLow,
    high: am4geodata_qatarHigh,
  },
  RO: {
    low: am4geodata_romaniaLow,
    high: am4geodata_romaniaHigh,
  },
  RU: {
    low: am4geodata_russiaLow,
    high: am4geodata_russiaHigh,
  },
  RW: {
    low: am4geodata_rwandaLow,
    high: am4geodata_rwandaHigh,
  },
  SH: {
    low: am4geodata_saintHelenaLow,
    high: am4geodata_saintHelenaHigh,
  },
  LC: {
    low: am4geodata_saintLuciaLow,
    high: am4geodata_saintLuciaHigh,
  },
  VC: {
    low: am4geodata_saintVincentLow,
    high: am4geodata_saintVincentHigh,
  },
  WS: {
    low: am4geodata_samoaLow,
    high: am4geodata_samoaHigh,
  },
  SM: {
    low: am4geodata_sanMarinoLow,
    high: am4geodata_sanMarinoHigh,
  },
  SS: {
    low: am4geodata_southSudanLow,
    high: am4geodata_southSudanHigh,
  },
  ST: {
    low: am4geodata_saoTomePrincipeLow,
    high: am4geodata_saoTomePrincipeHigh,
  },
  SA: {
    low: am4geodata_saudiArabiaLow,
    high: am4geodata_saudiArabiaHigh,
  },
  SN: {
    low: am4geodata_senegalLow,
    high: am4geodata_senegalHigh,
  },
  RS: {
    low: am4geodata_serbiaLow,
    high: am4geodata_serbiaHigh,
  },
  SC: {
    low: am4geodata_seychellesLow,
    high: am4geodata_seychellesHigh,
  },
  SL: {
    low: am4geodata_sierraLeoneLow,
    high: am4geodata_sierraLeoneHigh,
  },
  SG: {
    low: am4geodata_singaporeLow,
    high: am4geodata_singaporeHigh,
  },
  SK: {
    low: am4geodata_slovakiaLow,
    high: am4geodata_slovakiaHigh,
  },
  SI: {
    low: am4geodata_sloveniaLow,
    high: am4geodata_sloveniaHigh,
  },
  SB: {
    low: am4geodata_solomonIslandsLow,
    high: am4geodata_solomonIslandsHigh,
  },
  SO: {
    low: am4geodata_somaliaLow,
    high: am4geodata_somaliaHigh,
  },
  ZA: {
    low: am4geodata_southAfricaLow,
    high: am4geodata_southAfricaHigh,
  },
  KR: {
    low: am4geodata_southKoreaLow,
    high: am4geodata_southKoreaHigh,
  },
  ES: {
    low: am4geodata_spainLow,
    high: am4geodata_spainHigh,
  },
  LK: {
    low: am4geodata_sriLankaLow,
    high: am4geodata_sriLankaHigh,
  },
  LR: {
    low: am4geodata_liberiaLow,
    high: am4geodata_liberiaHigh,
  },
  LS: {
    low: am4geodata_lesothoLow,
    high: am4geodata_lesothoHigh,
  },
  KN: {
    low: am4geodata_stKittsNevisLow,
    high: am4geodata_stKittsNevisHigh,
  },
  PM: {
    low: am4geodata_stPierreMiquelonLow,
    high: am4geodata_stPierreMiquelonHigh,
  },
  SD: {
    low: am4geodata_sudanLow,
    high: am4geodata_sudanHigh,
  },
  SR: {
    low: am4geodata_surinameLow,
    high: am4geodata_surinameHigh,
  },
  SJ: {
    low: am4geodata_svalbardLow,
    high: am4geodata_svalbardHigh,
  },
  SE: {
    low: am4geodata_swedenLow,
    high: am4geodata_swedenHigh,
  },
  CH: {
    low: am4geodata_switzerlandLow,
    high: am4geodata_switzerlandHigh,
  },
  SY: {
    low: am4geodata_syriaLow,
    high: am4geodata_syriaHigh,
  },
  TJ: {
    low: am4geodata_tajikistanLow,
    high: am4geodata_tajikistanHigh,
  },
  TL: {
    low: am4geodata_timorLesteLow,
    high: am4geodata_timorLesteHigh,
  },
  TZ: {
    low: am4geodata_tanzaniaLow,
    high: am4geodata_tanzaniaHigh,
  },
  TH: {
    low: am4geodata_thailandLow,
    high: am4geodata_thailandHigh,
  },
  TG: {
    low: am4geodata_togoLow,
    high: am4geodata_togoHigh,
  },
  TN: {
    low: am4geodata_tunisiaLow,
    high: am4geodata_tunisiaHigh,
  },
  TR: {
    low: am4geodata_turkeyLow,
    high: am4geodata_turkeyHigh,
  },
  TM: {
    low: am4geodata_turkmenistanLow,
    high: am4geodata_turkmenistanHigh,
  },
  TT: {
    low: am4geodata_trinidadTobagoLow,
    high: am4geodata_trinidadTobagoHigh,
  },
  TW: {
    low: am4geodata_taiwanLow,
    high: am4geodata_taiwanHigh,
  },
  AE: {
    low: am4geodata_uaeLow,
    high: am4geodata_uaeHigh,
  },
  GB: {
    low: am4geodata_ukLow,
    high: am4geodata_ukHigh,
  },
  UA: {
    low: am4geodata_ukraineLow,
    high: am4geodata_ukraineHigh,
  },
  UG: {
    low: am4geodata_ugandaLow,
    high: am4geodata_ugandaHigh,
  },
  US: {
    low: am4geodata_usaLow,
    high: am4geodata_usaHigh,
  },
  UY: {
    low: am4geodata_uruguayLow,
    high: am4geodata_uruguayHigh,
  },
  UZ: {
    low: am4geodata_uzbekistanLow,
    high: am4geodata_uzbekistanHigh,
  },
  VA: {
    low: am4geodata_vaticanLow,
    high: am4geodata_vaticanHigh,
  },
  VE: {
    low: am4geodata_venezuelaLow,
    high: am4geodata_venezuelaHigh,
  },
  VI: {
    low: am4geodata_usVirginIslandsLow,
    high: am4geodata_usVirginIslandsHigh,
  },
  VN: {
    low: am4geodata_vietnamLow,
    high: am4geodata_vietnamHigh,
  },
  YE: {
    low: am4geodata_yemenLow,
    high: am4geodata_yemenHigh,
  },
  ZM: {
    low: am4geodata_zambiaLow,
    high: am4geodata_zambiaHigh,
  },
  ZW: {
    low: am4geodata_zimbabweLow,
    high: am4geodata_zimbabweHigh,
  },
};

export const ChartMap = ({
  world_fill = "#0c0c0c",
  world_hover = "#a0a0a0",
  country_fill = "#3498db",
  country_hover = "#F05C5C",
  marker_fill = "#B27799",
  marker_stroke = "#FFFFFF",
  marker_dim = 10,
  small_map = true,
  zoom_on_click = true,
  marker_data = [],
  data = [],
  projection = "Projection",
  addAntartica = false,
  codeMapType = [
    { code: "DE", type: "low" },
    { code: "CM", type: "low" },
  ],
}) => {
  useEffect(() => {
    let map = am4core.create("chartdiv", am4maps.MapChart);
    map.geodata = am4geodata_worldLow;
    map.zoomControl = new am4maps.ZoomControl();

    // configure projection

    if (projection === "Albers") {
      map.projection = new am4maps.projections.Albers();
    } else if (projection === "Miller") {
      map.projection = new am4maps.projections.Miller();
    } else if (projection === "AlbersUsa") {
      map.projection = new am4maps.projections.AlbersUsa();
    } else if (projection === "AzimuthalEqualArea") {
      map.projection = new am4maps.projections.AzimuthalEqualArea();
    } else if (projection === "Eckert6") {
      map.projection = new am4maps.projections.Eckert6();
    } else if (projection === "EqualEarth") {
      map.projection = new am4maps.projections.EqualEarth();
    } else if (projection === "Projection") {
      map.projection = am4maps.projections.Projection();
    } else if (projection === "Mercator") {
      map.projection = new am4maps.projections.Mercator();
    } else if (projection === "NaturalEarth1") {
      map.projection = new am4maps.projections.NaturalEarth1();
    } else if (projection === "Orthographic") {
      map.projection = new am4maps.projections.Orthographic();
    } else if (projection === "Stereographic") {
      map.projection = new am4maps.projections.Stereographic();
    } else {
      map.projection = am4maps.projections.Projection();
      console.log("Projection defaultes to Projectsion");
    }

    let polygonSeries = new am4maps.MapPolygonSeries();
    polygonSeries.useGeodata = true;
    polygonSeries.data = data;
    map.series.push(polygonSeries);

    // map filling
    let polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.fill = am4core.color(world_fill);

    // Create hover state and set alternative fill color
    let hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color(world_hover);

    if (!addAntartica) {
      polygonSeries.exclude = ["AQ"];
    }
    // zoom to country on click
    if (zoom_on_click) {
      polygonTemplate.events.on("hit", function (ev) {
        ev.target.series.chart.zoomToMapObject(ev.target);
      });
    }

    // ============= loop here to overlap countries maps==============

    codeMapType.map(({ code, type }, _) => {
      let countrySeries = map.series.push(new am4maps.MapPolygonSeries());
      countrySeries.geodata = data_list[code][type];

      let countryTemplate = countrySeries.mapPolygons.template;
      countryTemplate.tooltipText = "{name}";
      countryTemplate.fill = am4core.color(country_fill);

      // zoom to country on click
      countryTemplate.events.on("hit", function (ev) {
        ev.target.series.chart.zoomToMapObject(ev.target);
      });

      // Create hover state and set alternative fill color
      let countryhs = countryTemplate.states.create("hover");
      countryhs.properties.fill = am4core.color(country_hover);

      return "";
    });

    let imageSeries = map.series.push(new am4maps.MapImageSeries());

    let imageSeriesTemplate = imageSeries.mapImages.template;
    let circle = imageSeriesTemplate.createChild(am4core.Circle);
    circle.radius = 4;
    circle.width = marker_dim;
    circle.height = marker_dim;
    circle.fill = am4core.color(marker_fill);
    circle.stroke = am4core.color(marker_stroke);
    circle.strokeWidth = 1;
    circle.nonScaling = true;
    circle.tooltipText = "{title}";

    imageSeriesTemplate.propertyFields.latitude = "latitude";
    imageSeriesTemplate.propertyFields.longitude = "longitude";

    imageSeries.data = marker_data;

    if (small_map) {
      map.smallMap = new am4maps.SmallMap();
      map.smallMap.series.push(polygonSeries);
    }

    return () => {
      if (map) {
        map.dispose();
      }
    };
  }, [
    world_fill,
    world_hover,
    country_fill,
    country_hover,
    small_map,
    marker_data,
    marker_dim,
    marker_fill,
    marker_stroke,
    codeMapType,
    data,
    zoom_on_click,
    projection,
    addAntartica,
  ]);

  return <div id="chartdiv" style={{ width: "100%", height: "100%" }}></div>;
};
