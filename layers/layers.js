var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.osm.org/{z}/{x}/{y}.png'
            })
        });
var lyr_RASTERL7_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'RASTERL7<br />\
    <img src="styles/legend/RASTERL7_1_0.png" /> -0.5343<br />\
    <img src="styles/legend/RASTERL7_1_1.png" /> -0.5310<br />\
    <img src="styles/legend/RASTERL7_1_2.png" /> -0.5278<br />\
    <img src="styles/legend/RASTERL7_1_3.png" /> -0.5245<br />\
    <img src="styles/legend/RASTERL7_1_4.png" /> -0.5213<br />\
    <img src="styles/legend/RASTERL7_1_5.png" /> -0.5180<br />\
    <img src="styles/legend/RASTERL7_1_6.png" /> -0.5148<br />\
    <img src="styles/legend/RASTERL7_1_7.png" /> -0.5116<br />\
    <img src="styles/legend/RASTERL7_1_8.png" /> -0.5083<br />\
    <img src="styles/legend/RASTERL7_1_9.png" /> -0.5051<br />\
    <img src="styles/legend/RASTERL7_1_10.png" /> -0.5018<br />\
    <img src="styles/legend/RASTERL7_1_11.png" /> -0.4986<br />\
    <img src="styles/legend/RASTERL7_1_12.png" /> -0.4953<br />\
    <img src="styles/legend/RASTERL7_1_13.png" /> -0.4921<br />\
    <img src="styles/legend/RASTERL7_1_14.png" /> -0.4888<br />\
    <img src="styles/legend/RASTERL7_1_15.png" /> -0.4856<br />\
    <img src="styles/legend/RASTERL7_1_16.png" /> -0.4824<br />\
    <img src="styles/legend/RASTERL7_1_17.png" /> -0.4791<br />\
    <img src="styles/legend/RASTERL7_1_18.png" /> -0.4759<br />\
    <img src="styles/legend/RASTERL7_1_19.png" /> -0.4726<br />\
    <img src="styles/legend/RASTERL7_1_20.png" /> -0.4694<br />\
    <img src="styles/legend/RASTERL7_1_21.png" /> -0.4661<br />\
    <img src="styles/legend/RASTERL7_1_22.png" /> -0.4629<br />\
    <img src="styles/legend/RASTERL7_1_23.png" /> -0.4596<br />\
    <img src="styles/legend/RASTERL7_1_24.png" /> -0.4564<br />\
    <img src="styles/legend/RASTERL7_1_25.png" /> -0.4531<br />\
    <img src="styles/legend/RASTERL7_1_26.png" /> -0.4499<br />\
    <img src="styles/legend/RASTERL7_1_27.png" /> -0.4467<br />\
    <img src="styles/legend/RASTERL7_1_28.png" /> -0.4434<br />\
    <img src="styles/legend/RASTERL7_1_29.png" /> -0.4402<br />\
    <img src="styles/legend/RASTERL7_1_30.png" /> -0.4369<br />\
    <img src="styles/legend/RASTERL7_1_31.png" /> -0.4337<br />\
    <img src="styles/legend/RASTERL7_1_32.png" /> -0.4304<br />\
    <img src="styles/legend/RASTERL7_1_33.png" /> -0.4272<br />\
    <img src="styles/legend/RASTERL7_1_34.png" /> -0.4239<br />\
    <img src="styles/legend/RASTERL7_1_35.png" /> -0.4207<br />\
    <img src="styles/legend/RASTERL7_1_36.png" /> -0.4174<br />\
    <img src="styles/legend/RASTERL7_1_37.png" /> -0.4142<br />\
    <img src="styles/legend/RASTERL7_1_38.png" /> -0.4110<br />\
    <img src="styles/legend/RASTERL7_1_39.png" /> -0.4077<br />\
    <img src="styles/legend/RASTERL7_1_40.png" /> -0.4045<br />\
    <img src="styles/legend/RASTERL7_1_41.png" /> -0.4012<br />\
    <img src="styles/legend/RASTERL7_1_42.png" /> -0.3980<br />\
    <img src="styles/legend/RASTERL7_1_43.png" /> -0.3947<br />\
    <img src="styles/legend/RASTERL7_1_44.png" /> -0.3915<br />\
    <img src="styles/legend/RASTERL7_1_45.png" /> -0.3882<br />\
    <img src="styles/legend/RASTERL7_1_46.png" /> -0.3850<br />\
    <img src="styles/legend/RASTERL7_1_47.png" /> -0.3817<br />\
    <img src="styles/legend/RASTERL7_1_48.png" /> -0.3785<br />\
    <img src="styles/legend/RASTERL7_1_49.png" /> -0.3753<br />\
    <img src="styles/legend/RASTERL7_1_50.png" /> -0.3720<br />\
    <img src="styles/legend/RASTERL7_1_51.png" /> -0.3688<br />\
    <img src="styles/legend/RASTERL7_1_52.png" /> -0.3655<br />\
    <img src="styles/legend/RASTERL7_1_53.png" /> -0.3623<br />\
    <img src="styles/legend/RASTERL7_1_54.png" /> -0.3590<br />\
    <img src="styles/legend/RASTERL7_1_55.png" /> -0.3558<br />\
    <img src="styles/legend/RASTERL7_1_56.png" /> -0.3525<br />\
    <img src="styles/legend/RASTERL7_1_57.png" /> -0.3493<br />\
    <img src="styles/legend/RASTERL7_1_58.png" /> -0.3461<br />\
    <img src="styles/legend/RASTERL7_1_59.png" /> -0.3428<br />\
    <img src="styles/legend/RASTERL7_1_60.png" /> -0.3396<br />\
    <img src="styles/legend/RASTERL7_1_61.png" /> -0.3363<br />\
    <img src="styles/legend/RASTERL7_1_62.png" /> -0.3331<br />\
    <img src="styles/legend/RASTERL7_1_63.png" /> -0.3298<br />\
    <img src="styles/legend/RASTERL7_1_64.png" /> -0.3266<br />\
    <img src="styles/legend/RASTERL7_1_65.png" /> -0.3233<br />\
    <img src="styles/legend/RASTERL7_1_66.png" /> -0.3201<br />\
    <img src="styles/legend/RASTERL7_1_67.png" /> -0.3168<br />\
    <img src="styles/legend/RASTERL7_1_68.png" /> -0.3136<br />\
    <img src="styles/legend/RASTERL7_1_69.png" /> -0.3104<br />\
    <img src="styles/legend/RASTERL7_1_70.png" /> -0.3071<br />\
    <img src="styles/legend/RASTERL7_1_71.png" /> -0.3039<br />\
    <img src="styles/legend/RASTERL7_1_72.png" /> -0.3006<br />\
    <img src="styles/legend/RASTERL7_1_73.png" /> -0.2974<br />\
    <img src="styles/legend/RASTERL7_1_74.png" /> -0.2941<br />\
    <img src="styles/legend/RASTERL7_1_75.png" /> -0.2909<br />\
    <img src="styles/legend/RASTERL7_1_76.png" /> -0.2876<br />\
    <img src="styles/legend/RASTERL7_1_77.png" /> -0.2844<br />\
    <img src="styles/legend/RASTERL7_1_78.png" /> -0.2811<br />\
    <img src="styles/legend/RASTERL7_1_79.png" /> -0.2779<br />\
    <img src="styles/legend/RASTERL7_1_80.png" /> -0.2747<br />\
    <img src="styles/legend/RASTERL7_1_81.png" /> -0.2714<br />\
    <img src="styles/legend/RASTERL7_1_82.png" /> -0.2682<br />\
    <img src="styles/legend/RASTERL7_1_83.png" /> -0.2649<br />\
    <img src="styles/legend/RASTERL7_1_84.png" /> -0.2617<br />\
    <img src="styles/legend/RASTERL7_1_85.png" /> -0.2584<br />\
    <img src="styles/legend/RASTERL7_1_86.png" /> -0.2552<br />\
    <img src="styles/legend/RASTERL7_1_87.png" /> -0.2519<br />\
    <img src="styles/legend/RASTERL7_1_88.png" /> -0.2487<br />\
    <img src="styles/legend/RASTERL7_1_89.png" /> -0.2455<br />\
    <img src="styles/legend/RASTERL7_1_90.png" /> -0.2422<br />\
    <img src="styles/legend/RASTERL7_1_91.png" /> -0.2390<br />\
    <img src="styles/legend/RASTERL7_1_92.png" /> -0.2357<br />\
    <img src="styles/legend/RASTERL7_1_93.png" /> -0.2325<br />\
    <img src="styles/legend/RASTERL7_1_94.png" /> -0.2292<br />\
    <img src="styles/legend/RASTERL7_1_95.png" /> -0.2260<br />\
    <img src="styles/legend/RASTERL7_1_96.png" /> -0.2227<br />\
    <img src="styles/legend/RASTERL7_1_97.png" /> -0.2195<br />\
    <img src="styles/legend/RASTERL7_1_98.png" /> -0.2162<br />\
    <img src="styles/legend/RASTERL7_1_99.png" /> -0.2130<br />\
    <img src="styles/legend/RASTERL7_1_100.png" /> -0.2098<br />\
    <img src="styles/legend/RASTERL7_1_101.png" /> -0.2065<br />\
    <img src="styles/legend/RASTERL7_1_102.png" /> -0.2033<br />\
    <img src="styles/legend/RASTERL7_1_103.png" /> -0.2000<br />\
    <img src="styles/legend/RASTERL7_1_104.png" /> -0.1968<br />\
    <img src="styles/legend/RASTERL7_1_105.png" /> -0.1935<br />\
    <img src="styles/legend/RASTERL7_1_106.png" /> -0.1903<br />\
    <img src="styles/legend/RASTERL7_1_107.png" /> -0.1870<br />\
    <img src="styles/legend/RASTERL7_1_108.png" /> -0.1838<br />\
    <img src="styles/legend/RASTERL7_1_109.png" /> -0.1805<br />\
    <img src="styles/legend/RASTERL7_1_110.png" /> -0.1773<br />\
    <img src="styles/legend/RASTERL7_1_111.png" /> -0.1741<br />\
    <img src="styles/legend/RASTERL7_1_112.png" /> -0.1708<br />\
    <img src="styles/legend/RASTERL7_1_113.png" /> -0.1676<br />\
    <img src="styles/legend/RASTERL7_1_114.png" /> -0.1643<br />\
    <img src="styles/legend/RASTERL7_1_115.png" /> -0.1611<br />\
    <img src="styles/legend/RASTERL7_1_116.png" /> -0.1578<br />\
    <img src="styles/legend/RASTERL7_1_117.png" /> -0.1546<br />\
    <img src="styles/legend/RASTERL7_1_118.png" /> -0.1513<br />\
    <img src="styles/legend/RASTERL7_1_119.png" /> -0.1481<br />\
    <img src="styles/legend/RASTERL7_1_120.png" /> -0.1448<br />\
    <img src="styles/legend/RASTERL7_1_121.png" /> -0.1416<br />\
    <img src="styles/legend/RASTERL7_1_122.png" /> -0.1384<br />\
    <img src="styles/legend/RASTERL7_1_123.png" /> -0.1351<br />\
    <img src="styles/legend/RASTERL7_1_124.png" /> -0.1319<br />\
    <img src="styles/legend/RASTERL7_1_125.png" /> -0.1286<br />\
    <img src="styles/legend/RASTERL7_1_126.png" /> -0.1254<br />\
    <img src="styles/legend/RASTERL7_1_127.png" /> -0.1221<br />\
    <img src="styles/legend/RASTERL7_1_128.png" /> -0.1189<br />\
    <img src="styles/legend/RASTERL7_1_129.png" /> -0.1156<br />\
    <img src="styles/legend/RASTERL7_1_130.png" /> -0.1124<br />\
    <img src="styles/legend/RASTERL7_1_131.png" /> -0.1092<br />\
    <img src="styles/legend/RASTERL7_1_132.png" /> -0.1059<br />\
    <img src="styles/legend/RASTERL7_1_133.png" /> -0.1027<br />\
    <img src="styles/legend/RASTERL7_1_134.png" /> -0.0994<br />\
    <img src="styles/legend/RASTERL7_1_135.png" /> -0.0962<br />\
    <img src="styles/legend/RASTERL7_1_136.png" /> -0.0929<br />\
    <img src="styles/legend/RASTERL7_1_137.png" /> -0.0897<br />\
    <img src="styles/legend/RASTERL7_1_138.png" /> -0.0864<br />\
    <img src="styles/legend/RASTERL7_1_139.png" /> -0.0832<br />\
    <img src="styles/legend/RASTERL7_1_140.png" /> -0.0799<br />\
    <img src="styles/legend/RASTERL7_1_141.png" /> -0.0767<br />\
    <img src="styles/legend/RASTERL7_1_142.png" /> -0.0735<br />\
    <img src="styles/legend/RASTERL7_1_143.png" /> -0.0702<br />\
    <img src="styles/legend/RASTERL7_1_144.png" /> -0.0670<br />\
    <img src="styles/legend/RASTERL7_1_145.png" /> -0.0637<br />\
    <img src="styles/legend/RASTERL7_1_146.png" /> -0.0605<br />\
    <img src="styles/legend/RASTERL7_1_147.png" /> -0.0572<br />\
    <img src="styles/legend/RASTERL7_1_148.png" /> -0.0540<br />\
    <img src="styles/legend/RASTERL7_1_149.png" /> -0.0507<br />\
    <img src="styles/legend/RASTERL7_1_150.png" /> -0.0475<br />\
    <img src="styles/legend/RASTERL7_1_151.png" /> -0.0442<br />\
    <img src="styles/legend/RASTERL7_1_152.png" /> -0.0410<br />\
    <img src="styles/legend/RASTERL7_1_153.png" /> -0.0378<br />\
    <img src="styles/legend/RASTERL7_1_154.png" /> -0.0345<br />\
    <img src="styles/legend/RASTERL7_1_155.png" /> -0.0313<br />\
    <img src="styles/legend/RASTERL7_1_156.png" /> -0.0280<br />\
    <img src="styles/legend/RASTERL7_1_157.png" /> -0.0248<br />\
    <img src="styles/legend/RASTERL7_1_158.png" /> -0.0215<br />\
    <img src="styles/legend/RASTERL7_1_159.png" /> -0.0183<br />\
    <img src="styles/legend/RASTERL7_1_160.png" /> -0.0150<br />\
    <img src="styles/legend/RASTERL7_1_161.png" /> -0.0118<br />\
    <img src="styles/legend/RASTERL7_1_162.png" /> -0.0086<br />\
    <img src="styles/legend/RASTERL7_1_163.png" /> -0.0053<br />\
    <img src="styles/legend/RASTERL7_1_164.png" /> -0.0021<br />\
    <img src="styles/legend/RASTERL7_1_165.png" /> 0.0012<br />\
    <img src="styles/legend/RASTERL7_1_166.png" /> 0.0044<br />\
    <img src="styles/legend/RASTERL7_1_167.png" /> 0.0077<br />\
    <img src="styles/legend/RASTERL7_1_168.png" /> 0.0109<br />\
    <img src="styles/legend/RASTERL7_1_169.png" /> 0.0142<br />\
    <img src="styles/legend/RASTERL7_1_170.png" /> 0.0174<br />\
    <img src="styles/legend/RASTERL7_1_171.png" /> 0.0207<br />\
    <img src="styles/legend/RASTERL7_1_172.png" /> 0.0239<br />\
    <img src="styles/legend/RASTERL7_1_173.png" /> 0.0271<br />\
    <img src="styles/legend/RASTERL7_1_174.png" /> 0.0304<br />\
    <img src="styles/legend/RASTERL7_1_175.png" /> 0.0336<br />\
    <img src="styles/legend/RASTERL7_1_176.png" /> 0.0369<br />\
    <img src="styles/legend/RASTERL7_1_177.png" /> 0.0401<br />\
    <img src="styles/legend/RASTERL7_1_178.png" /> 0.0434<br />\
    <img src="styles/legend/RASTERL7_1_179.png" /> 0.0466<br />\
    <img src="styles/legend/RASTERL7_1_180.png" /> 0.0499<br />\
    <img src="styles/legend/RASTERL7_1_181.png" /> 0.0531<br />\
    <img src="styles/legend/RASTERL7_1_182.png" /> 0.0564<br />\
    <img src="styles/legend/RASTERL7_1_183.png" /> 0.0596<br />\
    <img src="styles/legend/RASTERL7_1_184.png" /> 0.0628<br />\
    <img src="styles/legend/RASTERL7_1_185.png" /> 0.0661<br />\
    <img src="styles/legend/RASTERL7_1_186.png" /> 0.0693<br />\
    <img src="styles/legend/RASTERL7_1_187.png" /> 0.0726<br />\
    <img src="styles/legend/RASTERL7_1_188.png" /> 0.0758<br />\
    <img src="styles/legend/RASTERL7_1_189.png" /> 0.0791<br />\
    <img src="styles/legend/RASTERL7_1_190.png" /> 0.0823<br />\
    <img src="styles/legend/RASTERL7_1_191.png" /> 0.0856<br />\
    <img src="styles/legend/RASTERL7_1_192.png" /> 0.0888<br />\
    <img src="styles/legend/RASTERL7_1_193.png" /> 0.0920<br />\
    <img src="styles/legend/RASTERL7_1_194.png" /> 0.0953<br />\
    <img src="styles/legend/RASTERL7_1_195.png" /> 0.0985<br />\
    <img src="styles/legend/RASTERL7_1_196.png" /> 0.1018<br />\
    <img src="styles/legend/RASTERL7_1_197.png" /> 0.1050<br />\
    <img src="styles/legend/RASTERL7_1_198.png" /> 0.1083<br />\
    <img src="styles/legend/RASTERL7_1_199.png" /> 0.1115<br />\
    <img src="styles/legend/RASTERL7_1_200.png" /> 0.1148<br />\
    <img src="styles/legend/RASTERL7_1_201.png" /> 0.1180<br />\
    <img src="styles/legend/RASTERL7_1_202.png" /> 0.1213<br />\
    <img src="styles/legend/RASTERL7_1_203.png" /> 0.1245<br />\
    <img src="styles/legend/RASTERL7_1_204.png" /> 0.1277<br />\
    <img src="styles/legend/RASTERL7_1_205.png" /> 0.1310<br />\
    <img src="styles/legend/RASTERL7_1_206.png" /> 0.1342<br />\
    <img src="styles/legend/RASTERL7_1_207.png" /> 0.1375<br />\
    <img src="styles/legend/RASTERL7_1_208.png" /> 0.1407<br />\
    <img src="styles/legend/RASTERL7_1_209.png" /> 0.1440<br />\
    <img src="styles/legend/RASTERL7_1_210.png" /> 0.1472<br />\
    <img src="styles/legend/RASTERL7_1_211.png" /> 0.1505<br />\
    <img src="styles/legend/RASTERL7_1_212.png" /> 0.1537<br />\
    <img src="styles/legend/RASTERL7_1_213.png" /> 0.1570<br />\
    <img src="styles/legend/RASTERL7_1_214.png" /> 0.1602<br />\
    <img src="styles/legend/RASTERL7_1_215.png" /> 0.1634<br />\
    <img src="styles/legend/RASTERL7_1_216.png" /> 0.1667<br />\
    <img src="styles/legend/RASTERL7_1_217.png" /> 0.1699<br />\
    <img src="styles/legend/RASTERL7_1_218.png" /> 0.1732<br />\
    <img src="styles/legend/RASTERL7_1_219.png" /> 0.1764<br />\
    <img src="styles/legend/RASTERL7_1_220.png" /> 0.1797<br />\
    <img src="styles/legend/RASTERL7_1_221.png" /> 0.1829<br />\
    <img src="styles/legend/RASTERL7_1_222.png" /> 0.1862<br />\
    <img src="styles/legend/RASTERL7_1_223.png" /> 0.1894<br />\
    <img src="styles/legend/RASTERL7_1_224.png" /> 0.1927<br />\
    <img src="styles/legend/RASTERL7_1_225.png" /> 0.1959<br />\
    <img src="styles/legend/RASTERL7_1_226.png" /> 0.1991<br />\
    <img src="styles/legend/RASTERL7_1_227.png" /> 0.2024<br />\
    <img src="styles/legend/RASTERL7_1_228.png" /> 0.2056<br />\
    <img src="styles/legend/RASTERL7_1_229.png" /> 0.2089<br />\
    <img src="styles/legend/RASTERL7_1_230.png" /> 0.2121<br />\
    <img src="styles/legend/RASTERL7_1_231.png" /> 0.2154<br />\
    <img src="styles/legend/RASTERL7_1_232.png" /> 0.2186<br />\
    <img src="styles/legend/RASTERL7_1_233.png" /> 0.2219<br />\
    <img src="styles/legend/RASTERL7_1_234.png" /> 0.2251<br />\
    <img src="styles/legend/RASTERL7_1_235.png" /> 0.2283<br />\
    <img src="styles/legend/RASTERL7_1_236.png" /> 0.2316<br />\
    <img src="styles/legend/RASTERL7_1_237.png" /> 0.2348<br />\
    <img src="styles/legend/RASTERL7_1_238.png" /> 0.2381<br />\
    <img src="styles/legend/RASTERL7_1_239.png" /> 0.2413<br />\
    <img src="styles/legend/RASTERL7_1_240.png" /> 0.2446<br />\
    <img src="styles/legend/RASTERL7_1_241.png" /> 0.2478<br />\
    <img src="styles/legend/RASTERL7_1_242.png" /> 0.2511<br />\
    <img src="styles/legend/RASTERL7_1_243.png" /> 0.2543<br />\
    <img src="styles/legend/RASTERL7_1_244.png" /> 0.2576<br />\
    <img src="styles/legend/RASTERL7_1_245.png" /> 0.2608<br />\
    <img src="styles/legend/RASTERL7_1_246.png" /> 0.2640<br />\
    <img src="styles/legend/RASTERL7_1_247.png" /> 0.2673<br />\
    <img src="styles/legend/RASTERL7_1_248.png" /> 0.2705<br />\
    <img src="styles/legend/RASTERL7_1_249.png" /> 0.2738<br />\
    <img src="styles/legend/RASTERL7_1_250.png" /> 0.2770<br />\
    <img src="styles/legend/RASTERL7_1_251.png" /> 0.2803<br />\
    <img src="styles/legend/RASTERL7_1_252.png" /> 0.2835<br />\
    <img src="styles/legend/RASTERL7_1_253.png" /> 0.2868<br />\
    <img src="styles/legend/RASTERL7_1_254.png" /> 0.2965<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/RASTERL7_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12296700.000000, -797822.456322, 12337950.000000, -748441.762298]
        })
    });
var format_ServiceAreaPoint111_2 = new ol.format.GeoJSON();
var features_ServiceAreaPoint111_2 = format_ServiceAreaPoint111_2.readFeatures(json_ServiceAreaPoint111_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ServiceAreaPoint111_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServiceAreaPoint111_2.addFeatures(features_ServiceAreaPoint111_2);
var lyr_ServiceAreaPoint111_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServiceAreaPoint111_2, 
                style: style_ServiceAreaPoint111_2,
                popuplayertitle: 'Service Area Point 1-11',
                interactive: false,
    title: 'Service Area Point 1-11<br />\
    <img src="styles/legend/ServiceAreaPoint111_2_0.png" /> 300 m<br />\
    <img src="styles/legend/ServiceAreaPoint111_2_1.png" /> 600 m<br />\
    <img src="styles/legend/ServiceAreaPoint111_2_2.png" /> 900 m<br />' });
var format_ServiceAreaPoint1222_3 = new ol.format.GeoJSON();
var features_ServiceAreaPoint1222_3 = format_ServiceAreaPoint1222_3.readFeatures(json_ServiceAreaPoint1222_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ServiceAreaPoint1222_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServiceAreaPoint1222_3.addFeatures(features_ServiceAreaPoint1222_3);
var lyr_ServiceAreaPoint1222_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServiceAreaPoint1222_3, 
                style: style_ServiceAreaPoint1222_3,
                popuplayertitle: 'Service Area Point 12-22',
                interactive: false,
    title: 'Service Area Point 12-22<br />\
    <img src="styles/legend/ServiceAreaPoint1222_3_0.png" /> 300 m<br />\
    <img src="styles/legend/ServiceAreaPoint1222_3_1.png" /> 600 m<br />\
    <img src="styles/legend/ServiceAreaPoint1222_3_2.png" /> 900 m<br />' });
var format_BadanAir_4 = new ol.format.GeoJSON();
var features_BadanAir_4 = format_BadanAir_4.readFeatures(json_BadanAir_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BadanAir_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BadanAir_4.addFeatures(features_BadanAir_4);
var lyr_BadanAir_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BadanAir_4, 
                style: style_BadanAir_4,
                popuplayertitle: 'Badan Air',
                interactive: false,
                title: '<img src="styles/legend/BadanAir_4.png" /> Badan Air'
            });
var format_FastestRouteEvacuation_5 = new ol.format.GeoJSON();
var features_FastestRouteEvacuation_5 = format_FastestRouteEvacuation_5.readFeatures(json_FastestRouteEvacuation_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FastestRouteEvacuation_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FastestRouteEvacuation_5.addFeatures(features_FastestRouteEvacuation_5);
var lyr_FastestRouteEvacuation_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FastestRouteEvacuation_5, 
                style: style_FastestRouteEvacuation_5,
                popuplayertitle: 'Fastest Route Evacuation',
                interactive: true,
                title: '<img src="styles/legend/FastestRouteEvacuation_5.png" /> Fastest Route Evacuation'
            });
var format_PermukimanBugangan_6 = new ol.format.GeoJSON();
var features_PermukimanBugangan_6 = format_PermukimanBugangan_6.readFeatures(json_PermukimanBugangan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PermukimanBugangan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PermukimanBugangan_6.addFeatures(features_PermukimanBugangan_6);
var lyr_PermukimanBugangan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PermukimanBugangan_6, 
                style: style_PermukimanBugangan_6,
                popuplayertitle: 'Permukiman Bugangan',
                interactive: true,
                title: '<img src="styles/legend/PermukimanBugangan_6.png" /> Permukiman Bugangan'
            });
var format_FastestRouteEvacuation_7 = new ol.format.GeoJSON();
var features_FastestRouteEvacuation_7 = format_FastestRouteEvacuation_7.readFeatures(json_FastestRouteEvacuation_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FastestRouteEvacuation_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FastestRouteEvacuation_7.addFeatures(features_FastestRouteEvacuation_7);
var lyr_FastestRouteEvacuation_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FastestRouteEvacuation_7, 
                style: style_FastestRouteEvacuation_7,
                popuplayertitle: 'Fastest Route Evacuation',
                interactive: true,
                title: '<img src="styles/legend/FastestRouteEvacuation_7.png" /> Fastest Route Evacuation'
            });
var format_PermukimanGlondong_8 = new ol.format.GeoJSON();
var features_PermukimanGlondong_8 = format_PermukimanGlondong_8.readFeatures(json_PermukimanGlondong_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PermukimanGlondong_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PermukimanGlondong_8.addFeatures(features_PermukimanGlondong_8);
var lyr_PermukimanGlondong_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PermukimanGlondong_8, 
                style: style_PermukimanGlondong_8,
                popuplayertitle: 'Permukiman Glondong',
                interactive: true,
                title: '<img src="styles/legend/PermukimanGlondong_8.png" /> Permukiman Glondong'
            });
var format_FastestRouteEvacuation_9 = new ol.format.GeoJSON();
var features_FastestRouteEvacuation_9 = format_FastestRouteEvacuation_9.readFeatures(json_FastestRouteEvacuation_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FastestRouteEvacuation_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FastestRouteEvacuation_9.addFeatures(features_FastestRouteEvacuation_9);
var lyr_FastestRouteEvacuation_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FastestRouteEvacuation_9, 
                style: style_FastestRouteEvacuation_9,
                popuplayertitle: 'Fastest Route Evacuation',
                interactive: true,
                title: '<img src="styles/legend/FastestRouteEvacuation_9.png" /> Fastest Route Evacuation'
            });
var format_PermukimanMargolinduk_10 = new ol.format.GeoJSON();
var features_PermukimanMargolinduk_10 = format_PermukimanMargolinduk_10.readFeatures(json_PermukimanMargolinduk_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PermukimanMargolinduk_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PermukimanMargolinduk_10.addFeatures(features_PermukimanMargolinduk_10);
var lyr_PermukimanMargolinduk_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PermukimanMargolinduk_10, 
                style: style_PermukimanMargolinduk_10,
                popuplayertitle: 'Permukiman Margolinduk',
                interactive: true,
                title: '<img src="styles/legend/PermukimanMargolinduk_10.png" /> Permukiman Margolinduk'
            });
var format_FastestRouteEvacuation_11 = new ol.format.GeoJSON();
var features_FastestRouteEvacuation_11 = format_FastestRouteEvacuation_11.readFeatures(json_FastestRouteEvacuation_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FastestRouteEvacuation_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FastestRouteEvacuation_11.addFeatures(features_FastestRouteEvacuation_11);
var lyr_FastestRouteEvacuation_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FastestRouteEvacuation_11, 
                style: style_FastestRouteEvacuation_11,
                popuplayertitle: 'Fastest Route Evacuation',
                interactive: true,
                title: '<img src="styles/legend/FastestRouteEvacuation_11.png" /> Fastest Route Evacuation'
            });
var format_PermukimanSampit_12 = new ol.format.GeoJSON();
var features_PermukimanSampit_12 = format_PermukimanSampit_12.readFeatures(json_PermukimanSampit_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PermukimanSampit_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PermukimanSampit_12.addFeatures(features_PermukimanSampit_12);
var lyr_PermukimanSampit_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PermukimanSampit_12, 
                style: style_PermukimanSampit_12,
                popuplayertitle: 'Permukiman Sampit',
                interactive: true,
                title: '<img src="styles/legend/PermukimanSampit_12.png" /> Permukiman Sampit'
            });
var format_FastestRouteEvacuation_13 = new ol.format.GeoJSON();
var features_FastestRouteEvacuation_13 = format_FastestRouteEvacuation_13.readFeatures(json_FastestRouteEvacuation_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FastestRouteEvacuation_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FastestRouteEvacuation_13.addFeatures(features_FastestRouteEvacuation_13);
var lyr_FastestRouteEvacuation_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FastestRouteEvacuation_13, 
                style: style_FastestRouteEvacuation_13,
                popuplayertitle: 'Fastest Route Evacuation',
                interactive: true,
                title: '<img src="styles/legend/FastestRouteEvacuation_13.png" /> Fastest Route Evacuation'
            });
var format_PermukimanSeklentig_14 = new ol.format.GeoJSON();
var features_PermukimanSeklentig_14 = format_PermukimanSeklentig_14.readFeatures(json_PermukimanSeklentig_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PermukimanSeklentig_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PermukimanSeklentig_14.addFeatures(features_PermukimanSeklentig_14);
var lyr_PermukimanSeklentig_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PermukimanSeklentig_14, 
                style: style_PermukimanSeklentig_14,
                popuplayertitle: 'Permukiman Seklentig',
                interactive: true,
                title: '<img src="styles/legend/PermukimanSeklentig_14.png" /> Permukiman Seklentig'
            });
var format_FasilitasUmum_15 = new ol.format.GeoJSON();
var features_FasilitasUmum_15 = format_FasilitasUmum_15.readFeatures(json_FasilitasUmum_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasilitasUmum_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasilitasUmum_15.addFeatures(features_FasilitasUmum_15);
var lyr_FasilitasUmum_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasilitasUmum_15, 
                style: style_FasilitasUmum_15,
                popuplayertitle: 'Fasilitas Umum ',
                interactive: true,
                title: '<img src="styles/legend/FasilitasUmum_15.png" /> Fasilitas Umum '
            });
var format_AdministrasiDemak_16 = new ol.format.GeoJSON();
var features_AdministrasiDemak_16 = format_AdministrasiDemak_16.readFeatures(json_AdministrasiDemak_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AdministrasiDemak_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdministrasiDemak_16.addFeatures(features_AdministrasiDemak_16);
var lyr_AdministrasiDemak_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AdministrasiDemak_16, 
                style: style_AdministrasiDemak_16,
                popuplayertitle: 'Administrasi Demak',
                interactive: false,
                title: '<img src="styles/legend/AdministrasiDemak_16.png" /> Administrasi Demak'
            });
var group_PermukimanSeklenting = new ol.layer.Group({
                                layers: [lyr_FastestRouteEvacuation_13,lyr_PermukimanSeklentig_14,],
                                fold: 'open',
                                title: 'Permukiman Seklenting'});
var group_PermukimanSampit = new ol.layer.Group({
                                layers: [lyr_FastestRouteEvacuation_11,lyr_PermukimanSampit_12,],
                                fold: 'open',
                                title: 'Permukiman Sampit'});
var group_PermukimanMargolinduk = new ol.layer.Group({
                                layers: [lyr_FastestRouteEvacuation_9,lyr_PermukimanMargolinduk_10,],
                                fold: 'open',
                                title: 'Permukiman Margolinduk'});
var group_PermukimanGlondong = new ol.layer.Group({
                                layers: [lyr_FastestRouteEvacuation_7,lyr_PermukimanGlondong_8,],
                                fold: 'open',
                                title: 'Permukiman Glondong'});
var group_PermukimanBugangan = new ol.layer.Group({
                                layers: [lyr_FastestRouteEvacuation_5,lyr_PermukimanBugangan_6,],
                                fold: 'open',
                                title: 'Permukiman Bugangan'});
var group_CITRASATELITGEE = new ol.layer.Group({
                                layers: [lyr_RASTERL7_1,],
                                fold: 'close',
                                title: 'CITRA SATELIT GEE'});
var group_MentahanServiceArea = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Mentahan Service Area'});

lyr_OpenStreetMap_0.setVisible(true);lyr_RASTERL7_1.setVisible(true);lyr_ServiceAreaPoint111_2.setVisible(true);lyr_ServiceAreaPoint1222_3.setVisible(true);lyr_BadanAir_4.setVisible(true);lyr_FastestRouteEvacuation_5.setVisible(true);lyr_PermukimanBugangan_6.setVisible(true);lyr_FastestRouteEvacuation_7.setVisible(true);lyr_PermukimanGlondong_8.setVisible(true);lyr_FastestRouteEvacuation_9.setVisible(true);lyr_PermukimanMargolinduk_10.setVisible(true);lyr_FastestRouteEvacuation_11.setVisible(true);lyr_PermukimanSampit_12.setVisible(true);lyr_FastestRouteEvacuation_13.setVisible(true);lyr_PermukimanSeklentig_14.setVisible(true);lyr_FasilitasUmum_15.setVisible(true);lyr_AdministrasiDemak_16.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_CITRASATELITGEE,lyr_ServiceAreaPoint111_2,lyr_ServiceAreaPoint1222_3,lyr_BadanAir_4,group_PermukimanBugangan,group_PermukimanGlondong,group_PermukimanMargolinduk,group_PermukimanSampit,group_PermukimanSeklenting,lyr_FasilitasUmum_15,lyr_AdministrasiDemak_16];
lyr_ServiceAreaPoint111_2.set('fieldAliases', {'id': 'id', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_METERS': 'AA_METERS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_ServiceAreaPoint1222_3.set('fieldAliases', {'id': 'id', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_METERS': 'AA_METERS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_BadanAir_4.set('fieldAliases', {'id': 'id', });
lyr_FastestRouteEvacuation_5.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_PermukimanBugangan_6.set('fieldAliases', {'id': 'id', });
lyr_FastestRouteEvacuation_7.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_PermukimanGlondong_8.set('fieldAliases', {'id': 'id', });
lyr_FastestRouteEvacuation_9.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_PermukimanMargolinduk_10.set('fieldAliases', {'id': 'id', });
lyr_FastestRouteEvacuation_11.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_PermukimanSampit_12.set('fieldAliases', {'id': 'id', });
lyr_FastestRouteEvacuation_13.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_PermukimanSeklentig_14.set('fieldAliases', {'id': 'id', });
lyr_FasilitasUmum_15.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'SrviceArea': 'SrviceArea', 'Jangkauan': 'Jangkauan', 'Foto': 'Foto', });
lyr_AdministrasiDemak_16.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_ServiceAreaPoint111_2.set('fieldImages', {'id': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_METERS': 'Range', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_ServiceAreaPoint1222_3.set('fieldImages', {'id': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_METERS': 'Range', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_BadanAir_4.set('fieldImages', {'id': 'TextEdit', });
lyr_FastestRouteEvacuation_5.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_PermukimanBugangan_6.set('fieldImages', {'id': 'TextEdit', });
lyr_FastestRouteEvacuation_7.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_PermukimanGlondong_8.set('fieldImages', {'id': 'TextEdit', });
lyr_FastestRouteEvacuation_9.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_PermukimanMargolinduk_10.set('fieldImages', {'id': 'TextEdit', });
lyr_FastestRouteEvacuation_11.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_PermukimanSampit_12.set('fieldImages', {'id': 'TextEdit', });
lyr_FastestRouteEvacuation_13.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_PermukimanSeklentig_14.set('fieldImages', {'id': 'TextEdit', });
lyr_FasilitasUmum_15.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'SrviceArea': 'TextEdit', 'Jangkauan': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_AdministrasiDemak_16.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_ServiceAreaPoint111_2.set('fieldLabels', {'id': 'hidden field', 'CENTER_LON': 'hidden field', 'CENTER_LAT': 'hidden field', 'AA_METERS': 'hidden field', 'AA_MODE': 'hidden field', 'TOTAL_POP': 'hidden field', });
lyr_ServiceAreaPoint1222_3.set('fieldLabels', {'id': 'header label - visible with data', 'CENTER_LON': 'header label - visible with data', 'CENTER_LAT': 'header label - visible with data', 'AA_METERS': 'header label - visible with data', 'AA_MODE': 'header label - visible with data', 'TOTAL_POP': 'header label - visible with data', });
lyr_BadanAir_4.set('fieldLabels', {'id': 'no label', });
lyr_FastestRouteEvacuation_5.set('fieldLabels', {'DIST_KM': 'header label - visible with data', 'DURATION_H': 'header label - visible with data', 'PROFILE': 'header label - visible with data', 'PREF': 'header label - visible with data', 'OPTIONS': 'header label - visible with data', 'FROM_ID': 'no label', 'TO_ID': 'header label - visible with data', });
lyr_PermukimanBugangan_6.set('fieldLabels', {'id': 'no label', });
lyr_FastestRouteEvacuation_7.set('fieldLabels', {'DIST_KM': 'no label', 'DURATION_H': 'no label', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_PermukimanGlondong_8.set('fieldLabels', {'id': 'no label', });
lyr_FastestRouteEvacuation_9.set('fieldLabels', {'DIST_KM': 'no label', 'DURATION_H': 'no label', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_PermukimanMargolinduk_10.set('fieldLabels', {'id': 'no label', });
lyr_FastestRouteEvacuation_11.set('fieldLabels', {'DIST_KM': 'hidden field', 'DURATION_H': 'hidden field', 'PROFILE': 'hidden field', 'PREF': 'hidden field', 'OPTIONS': 'hidden field', 'FROM_ID': 'hidden field', 'TO_ID': 'hidden field', });
lyr_PermukimanSampit_12.set('fieldLabels', {'id': 'hidden field', });
lyr_FastestRouteEvacuation_13.set('fieldLabels', {'DIST_KM': 'hidden field', 'DURATION_H': 'hidden field', 'PROFILE': 'hidden field', 'PREF': 'hidden field', 'OPTIONS': 'hidden field', 'FROM_ID': 'hidden field', 'TO_ID': 'hidden field', });
lyr_PermukimanSeklentig_14.set('fieldLabels', {'id': 'hidden field', });
lyr_FasilitasUmum_15.set('fieldLabels', {'id': 'hidden field', 'Nama': 'inline label - visible with data', 'SrviceArea': 'inline label - visible with data', 'Jangkauan': 'hidden field', 'Foto': 'inline label - visible with data', });
lyr_AdministrasiDemak_16.set('fieldLabels', {'KDPPUM': 'hidden field', 'NAMOBJ': 'hidden field', 'REMARK': 'hidden field', 'KDPBPS': 'hidden field', 'FCODE': 'hidden field', 'LUASWH': 'hidden field', 'UUPP': 'hidden field', 'SRS_ID': 'hidden field', 'LCODE': 'hidden field', 'METADATA': 'hidden field', 'KDEBPS': 'hidden field', 'KDEPUM': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDBBPS': 'hidden field', 'KDBPUM': 'hidden field', 'WADMKD': 'hidden field', 'WIADKD': 'hidden field', 'WADMKC': 'hidden field', 'WIADKC': 'hidden field', 'WADMKK': 'hidden field', 'WIADKK': 'hidden field', 'WADMPR': 'hidden field', 'WIADPR': 'hidden field', 'TIPADM': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_AdministrasiDemak_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});