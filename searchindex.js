Search.setIndex({docnames:["api_doc/data","api_doc/envs","api_doc/eval","api_doc/index","api_doc/models","api_doc/policy","api_doc/simulators","api_doc/utils","faq/index","features/carla_benchmark","features/casezoo","features/datasets","features/index","features/policy_feature","features/simulator_feature","features/visualize","index","installation/index","model_zoo/coil","model_zoo/implicit","model_zoo/index","tutorial/auto_run","tutorial/carla_tutorial","tutorial/core_concepts","tutorial/il_tutorial","tutorial/index","tutorial/rl_tutorial"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["api_doc/data.rst","api_doc/envs.rst","api_doc/eval.rst","api_doc/index.rst","api_doc/models.rst","api_doc/policy.rst","api_doc/simulators.rst","api_doc/utils.rst","faq/index.rst","features/carla_benchmark.rst","features/casezoo.rst","features/datasets.rst","features/index.rst","features/policy_feature.rst","features/simulator_feature.rst","features/visualize.rst","index.rst","installation/index.rst","model_zoo/coil.rst","model_zoo/implicit.rst","model_zoo/index.rst","tutorial/auto_run.rst","tutorial/carla_tutorial.rst","tutorial/core_concepts.rst","tutorial/il_tutorial.rst","tutorial/index.rst","tutorial/rl_tutorial.rst"],objects:{"core.data.carla_benchmark_collector":{CarlaBenchmarkCollector:[0,0,1,""]},"core.data.carla_benchmark_collector.CarlaBenchmarkCollector":{close:[0,1,1,""],collect:[0,1,1,""],reset:[0,1,1,""]},"core.data.dataset_saver":{BenchmarkDatasetSaver:[0,0,1,""]},"core.data.dataset_saver.BenchmarkDatasetSaver":{make_dataset_path:[0,1,1,""],make_index:[0,1,1,""],save_episodes_data:[0,1,1,""]},"core.envs":{BaseCarlaEnv:[1,0,1,""],BenchmarkEnvWrapper:[1,0,1,""],CarlaEnvWrapper:[1,0,1,""],ScenarioCarlaEnv:[1,0,1,""],SimpleCarlaEnv:[1,0,1,""]},"core.envs.BaseCarlaEnv":{close:[1,1,1,""],reset:[1,1,1,""],seed:[1,1,1,""],step:[1,1,1,""]},"core.envs.BenchmarkEnvWrapper":{reset:[1,1,1,""],step:[1,1,1,""]},"core.envs.CarlaEnvWrapper":{close:[1,1,1,""],info:[1,1,1,""],render:[1,1,1,""],reset:[1,1,1,""],seed:[1,1,1,""],step:[1,1,1,""]},"core.envs.ScenarioCarlaEnv":{close:[1,1,1,""],compute_reward:[1,1,1,""],get_observations:[1,1,1,""],is_failure:[1,1,1,""],is_success:[1,1,1,""],render:[1,1,1,""],reset:[1,1,1,""],seed:[1,1,1,""],step:[1,1,1,""]},"core.envs.SimpleCarlaEnv":{close:[1,1,1,""],compute_reward:[1,1,1,""],get_observations:[1,1,1,""],is_failure:[1,1,1,""],is_success:[1,1,1,""],render:[1,1,1,""],reset:[1,1,1,""],seed:[1,1,1,""],step:[1,1,1,""]},"core.eval":{CarlaBenchmarkEvaluator:[2,0,1,""],SingleCarlaEvaluator:[2,0,1,""]},"core.eval.CarlaBenchmarkEvaluator":{close:[2,1,1,""],eval:[2,1,1,""],reset:[2,1,1,""]},"core.eval.SingleCarlaEvaluator":{close:[2,1,1,""],eval:[2,1,1,""],should_eval:[2,1,1,""]},"core.models":{BEVSpeedConvEncoder:[4,0,1,""],BEVSpeedDeterminateNet:[4,0,1,""],BEVSpeedStochasticNet:[4,0,1,""],VehiclePIDController:[4,0,1,""]},"core.models.BEVSpeedConvEncoder":{forward:[4,1,1,""]},"core.models.BEVSpeedDeterminateNet":{forward:[4,1,1,""]},"core.models.BEVSpeedStochasticNet":{forward:[4,1,1,""]},"core.models.VehiclePIDController":{forward:[4,1,1,""]},"core.models.model_wrappers":{SteerNoiseWrapper:[4,0,1,""]},"core.models.model_wrappers.SteerNoiseWrapper":{forward:[4,1,1,""]},"core.policy":{AutoPolicy:[5,0,1,""]},"core.policy.AutoPolicy":{_forward_collect:[5,1,1,""],_forward_eval:[5,1,1,""],_init_collect:[5,1,1,""],_init_eval:[5,1,1,""],_reset_collect:[5,1,1,""],_reset_eval:[5,1,1,""]},"core.policy.base_carla_policy":{BaseCarlaPolicy:[5,0,1,""]},"core.simulators":{CarlaScenarioSimulator:[6,0,1,""],CarlaSimulator:[6,0,1,""]},"core.simulators.CarlaScenarioSimulator":{clean_up:[6,1,1,""],end_scenario:[6,1,1,""],get_criteria:[6,1,1,""],init:[6,1,1,""],run_step:[6,1,1,""]},"core.simulators.CarlaSimulator":{apply_control:[6,1,1,""],apply_planner:[6,1,1,""],clean_up:[6,1,1,""],get_information:[6,1,1,""],get_navigation:[6,1,1,""],get_sensor_data:[6,1,1,""],get_state:[6,1,1,""],init:[6,1,1,""],run_step:[6,1,1,""]},"core.simulators.base_simulator":{BaseSimulator:[6,0,1,""]},"core.simulators.base_simulator.BaseSimulator":{apply_control:[6,1,1,""],run_step:[6,1,1,""]},"core.utils.env_utils.stuck_detector":{StuckDetector:[7,0,1,""]},"core.utils.env_utils.stuck_detector.StuckDetector":{clear:[7,1,1,""],tick:[7,1,1,""]},"core.utils.others.visualizer":{Visualizer:[7,0,1,""]},"core.utils.others.visualizer.Visualizer":{done:[7,1,1,""],init:[7,1,1,""],paint:[7,1,1,""],run_visualize:[7,1,1,""]},"core.utils.planner.basic_planner":{BasicPlanner:[7,0,1,""]},"core.utils.planner.basic_planner.BasicPlanner":{clean_up:[7,1,1,""],get_incoming_waypoint_and_direction:[7,1,1,""],get_waypoints_list:[7,1,1,""],run_step:[7,1,1,""],set_destination:[7,1,1,""],set_route:[7,1,1,""]},"core.utils.planner.behavior_planner":{BehaviorPlanner:[7,0,1,""]},"core.utils.planner.behavior_planner.BehaviorPlanner":{run_step:[7,1,1,""]},"core.utils.simulator_utils.sensor_utils":{CollisionSensor:[7,0,1,""],SensorHelper:[7,0,1,""],TrafficLightHelper:[7,0,1,""]},"core.utils.simulator_utils.sensor_utils.CollisionSensor":{clear:[7,1,1,""]},"core.utils.simulator_utils.sensor_utils.SensorHelper":{clean_up:[7,1,1,""],get_sensors_data:[7,1,1,""],setup_sensors:[7,1,1,""]},"core.utils.simulator_utils.sensor_utils.TrafficLightHelper":{tick:[7,1,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"]},objtypes:{"0":"py:class","1":"py:method"},terms:{"0":[0,4,6,7,9,14,15,17,18,21,22],"0002":18,"003":4,"04":[17,26],"05":18,"099":17,"1":[4,6,7,9,11,14,17,18,22],"10":[6,14,17,18,24],"100":[4,9,11,14,18],"1000":14,"1000001":18,"100carla":19,"11":[0,14],"115":18,"12":[14,18,24],"120":18,"126":8,"128":[4,18],"13":14,"14":14,"15":[14,18,21],"16":[17,26],"160":14,"18":[9,17],"1s":22,"2":[1,4,5,9,14,15,18,21,24,26],"20":[4,9,14],"200":[7,18],"2000":[14,22],"200000":18,"2002":22,"2018":18,"2018end":18,"2019":9,"2080ti":24,"20ghz":26,"21":9,"22":9,"23":9,"24":26,"25":[9,18],"256":[4,18],"2d":[11,14],"3":[4,5,7,14,15,17,18,23,26],"32":[4,18],"320":14,"32g":[19,26],"384":14,"3d":[11,14],"3e":4,"4":[4,14,17,18,19,22],"40":18,"400":14,"42":9,"43":9,"45":[9,18],"46":9,"48carla":19,"4d":14,"4gb":17,"5":[4,11,14,18,21],"50":[8,9,18],"500":[18,21],"5000":18,"512":[4,18],"6":[14,17],"600":[18,21],"60carla":19,"64":4,"7":[14,17,24],"72":9,"75":4,"75000":18,"8":[4,14,18,21,24,26],"80":9,"800":[18,21],"8000":18,"8002":18,"86":9,"8700":26,"88":[9,18],"8d":8,"9":[6,14,17,22],"90":[9,14],"9000":[1,6,18,21,22,24,26],"9002":[21,22,24,26],"9008":24,"9010":18,"9016":26,"9050":6,"92":9,"95":18,"9900k":24,"abstract":[1,6],"case":[10,22],"class":[0,1,2,4,5,6,7,14],"default":[0,1,2,4,5,6,7,8,10,14,17,21,22,24,26],"do":1,"export":18,"final":[1,2,4,7,14],"float":[1,2,4,6,7,11,14],"function":[0,13,23],"import":[10,17],"int":[0,1,2,4,5,6,7,11,14],"new":[1,5,8,10,23],"null":8,"return":[0,1,2,4,5,6,7,11,13,14],"short":[1,7,10],"static":6,"switch":[14,21,26],"true":[7,14,15,18,26],"try":16,"void":14,"while":[1,22],A:[1,6,11,14,15],And:1,As:[13,14],By:[5,26],For:[0,2,5,9,11,13,14,15,22,24,26],If:[0,1,4,6,7,8,14,17,21,24],In:[1,5,7,8,10,21,22,24,26],It:[0,1,2,4,5,6,7,9,10,11,14,16,17,18,21,22,23,26],Its:1,NOT:[1,6,22],One:[13,23],Or:[8,17],The:[0,1,2,4,5,6,7,8,9,10,11,14,15,16,18,21,22,23,24,26],Their:[5,11],Then:[4,5,14,15,17,21,22,24],There:[10,14],To:[1,5,14,17,18,21,24],Will:14,_00000:11,_forward_collect:[5,13],_forward_ev:5,_init_collect:5,_init_ev:5,_interfac:5,_interface_xxx:5,_log:24,_preload:24,_reset_collect:5,_reset_ev:5,_variablefunctionsclass:4,a1:8,a2:8,a3:8,a4:8,a5:8,abil:10,abl:[10,13],about:[1,6,14,18,19,26],abov:[4,15,24],academ:16,academia:16,acc:6,acceler:[11,14],accord:[0,1,5,6,7,9,10,26],account:[7,14],accur:10,across:16,act:13,action:[0,1,4,7,13,15,23],action_shap:4,actor:[1,4,6,7,14,22],ad:[1,8,14,15,16],adapt:16,add:[1,4,5,6,7,8,10,11,14,15,26],addit:[0,2],address:19,afford:[9,20],after:[0,13,26],again:[0,8],agent:[7,14,15,17,19,23],agent_st:14,aggress:7,ahead:[7,14],aim:[1,10],al:9,alexei:18,algorithm:26,alias:9,align:1,all:[0,1,2,5,6,7,9,10,11,13,14,16,18,21,22,23,26],allow:[9,10,11,13,22],along:1,alreadi:6,also:[1,7,9,10,14,17,22,23],alwai:1,amazonaw:17,among:14,amount:[9,10],an:[0,1,6,7,9,10,11,13,14,15,16,21,22,23,24],anaconda:8,analyz:[7,23],andrun:5,ani:[0,1,2,4,6,7,10,16,17,23],antonio:18,anyth:8,aonfigur:9,api:[8,9,14,16,22],aplli:6,appli:[4,6,7,16,24],applic:16,apply_control:6,apply_plann:6,apt:8,ar:[0,1,2,6,7,9,10,11,13,14,16,26],architectur:[18,22,24],arg:[1,4,6],args_later:4,args_longitudin:4,argument:[0,1,2,4,5,6,7,9,14],around:6,arrai:14,arrang:11,arxiv:19,asound:8,aspect:11,associ:14,async:22,asynchron:22,attach:7,attitud:1,aug:14,aug_cfg:7,augmant:7,augment:[7,14,18],author:18,auto:[0,2,10,14,15,16,25],auto_pilot:14,auto_reset:18,auto_run:[10,21],auto_run_cas:[10,21],autoeval_config:18,autom:18,automat:[0,7,11,14,22],autonom:[5,9,14,16,23,26],autopilot:[6,24],autoploit:18,autopolici:[3,21],autorun_config:21,avail:[0,2,14],averag:0,avoid:[6,7,23,26],baci:22,background:14,base:[1,5,6,7,16],base_carla_env:1,base_carla_polici:5,base_env:1,base_env_manag:[0,2],base_simul:6,basecarlaenv:3,basecarlapolici:3,baseenv:1,baseenvinfo:1,baseenvmanag:[0,2,13],baseenvtimestep:1,basesimul:3,bash:22,basic:[6,7,13,14,16,25],basic_plann:7,basicplann:[3,14],batch:13,batch_siz:18,becaus:[8,22],been:18,befor:[6,14,22],begin:26,beginn:16,behavior:[1,7,10,13,18,22],behavior_plann:7,behaviorplann:[3,14],being:1,below:11,benchmark:[0,1,2,10,12,16,18,24],benchmarkdatasetsav:[3,11],benchmarkenvwrapp:[3,9],besid:7,between:[4,14,15],bev:[4,6,14,18,21],bevspeedconvencod:3,bevspeeddeterminatenet:3,bevspeedstochasticnet:3,bin:[8,22],bird:[4,6,14,15,21,26],birdview:[4,14,18,21,26],block:14,booktitl:18,bool:[1,2,4,6,7,14],both:[4,16],brake:[4,11,18,24],branch:18,branch_loss_weight:18,buffer:[7,23,26],build:[6,9,14,15,26],built:[10,22],c:[8,17],cach:0,calcul:[1,7,21,23],call:[1,5,6,13,14,15,16,21,22],callabl:0,camera1_nam:11,camera2_nam:11,camera:[7,14,15,18,21,24],can:[0,1,2,4,5,6,7,9,10,11,13,14,15,16,17,18,19,21,22,23,24,26],canva:[1,7,15],captur:18,car:7,card:8,carl:14,carla:[0,1,2,5,6,7,9,10,11,12,16,18,19,21,24,25,26],carla_099:17,carla_0:17,carla_ag:7,carla_benchmark_collector:0,carla_env:[10,22],carla_host:[18,21,24,26],carla_port:[18,21,24,26],carlabenchmarkcollector:[3,9],carlabenchmarkevalu:[3,9],carladataprovid:6,carlaenvwrapp:3,carlascenariosimul:[1,3],carlasim:22,carlasimul:[1,3,14],carlaue4:[17,22,24],casezoo:[12,16,25],categori:11,caus:6,cautiou:7,cd:[17,19,21,24,26],ce:22,certain:[7,10,18,24],certainli:1,cfg:[0,1,2,5,6,7],chang:[0,1,4,5,6,7,14,16,18,21,22,24,26],changelanetown04:[9,19],channel:[6,14],chaotic:22,characterist:10,charactorist:10,check:[1,6,7,9,14,15,16,17,21],checkout:17,checkpoint:[18,24],choos:[1,9,14],cil:[18,24],cils_datasets_train:[18,24],ckpt_path:[18,24,26],clean:[6,7],clean_up:[6,7,22],clear:[0,5,6,7,14],clear_up:7,client:[4,6,22],clip:4,clone:17,close:[0,1,2],closer:16,cloudi:14,code:[17,18,26],codevilla:18,coil:18,coil_data_collect:[18,24],coil_demo:[18,24],coil_ev:[18,24],coil_icra:[18,24],coil_train:[18,24],col_is_failur:18,col_threshold:[7,14],collect:[0,5,11,13,16,19,23,25,26],collect_data:19,collect_mod:[5,13],collector:[0,2,9,13,18,23],collid:[6,7],collis:[6,7,10,14,23],collisionsensor:3,com:17,combin:[4,16],come:[6,10,14],command:[0,8,11,14,17,18,21,22,24],command_index:0,common:[6,10,12,17,18,22,24],commonli:[9,23],commun:22,compar:10,compil:17,complet:[16,26],complex:[13,16],compon:11,comput:[1,4,13,14],compute_reward:1,concat:[4,18],concept:[10,16,25],concern:26,conda:8,condit:[9,20,24],conf:8,confer:18,config:[0,1,2,5,6,7,10,14,15,18,19,21,24,26],config_fil:10,configuarion:10,configur:[1,6,10,11,12,16,18,24],congratul:24,connect:[4,17,21,22],consist:[7,9,11,14,22],contain:[1,4,6,7,9,11,13,14,16,22,23,26],content:[11,14,26],control:[1,4,5,6,10,13,14,16,18,22,23,24,26],conv:4,conveni:[9,10],convert:[1,6],convolut:[4,18],coordin:[4,14],copi:19,core:[0,1,2,4,5,6,7,10,13,16,25,26],correct:5,correctli:13,correl:7,correspond:17,cost:24,could:[1,6,8],count:[0,6,7],cpu:26,creat:[1,6,7,10,11,14,15,16,24,25],criteria:[1,6,10],critic:4,crop:19,cross:7,csv:2,cuda:26,current:[1,2,4,6,7,10,14,22,26],current_loc:4,current_ori:4,current_spe:4,currrent:14,custom:[11,14,15,16,18,24],dai:19,data:[1,3,4,5,6,7,9,10,12,13,14,15,16,17,19,21,23,24],data_dict:7,data_id:5,dataset:[0,9,10,12,16,18,19,23,25],dataset_dir:19,dataset_metadata:11,dataset_metainfo:0,dataset_nam:11,dataset_path:[18,24],dataset_sav:0,datasets_train:[18,24],datasets_train_collector:18,deal:17,debug:[7,14],decis:[7,10,16,23],decompos:[16,23],deep:[10,16,23],defin:[0,1,5,7,9,10,11,13,14,16,23,26],defini:13,definit:[1,23],delet:[1,6],deliv:1,delta_second:14,demo:[10,18,21,24,26],depend:4,deploi:[9,16],deploy:[1,26],depth:14,derect:6,deriv:1,describ:11,descript:[6,16,21],design:[5,10,13,16,21],desir:11,destin:7,destroi:[6,7,22],detail:[1,9,10,14,16,18,26],detect:7,detector:7,determin:4,dev:8,develop:[16,17],devid:10,di:[0,1,2,5,9,10,11,13,14,15,18,21,22,23,24,25],dict:[0,1,2,4,5,6,7,13,14,15,18,21,24,26],dictanc:[6,14],dictionari:[4,14],differ:[5,7,10,11,13,14,23],differenti:4,difficulti:[10,16],dimens:4,ding:[0,1,2],dir:19,dir_path:18,direct:[1,6,7,14],directli:[7,8,13,26],directori:[11,17,26],disabl:14,disable_two_wheel:[6,14,18],displai:23,dist:17,distanc:[6,7,14],distribut:17,dive:16,divid:11,doc:[9,14,16,22,26],docker2:22,docker:[16,25],document:14,done:[1,7,13],dosovitskii:18,download:16,dqn:[9,26],dqn_eval:26,dqn_main:26,draw:14,drive:[0,5,9,10,11,13,14,15,18,20,21,22,23,24,25],drive_len:4,dropout:18,dt:4,due:6,dure:[6,7,10,13,14],dut:6,e:[13,17],each:[0,1,2,4,5,6,7,9,10,11,13,14,23],eas:16,easi:26,easier:22,easili:[7,10,11,16],easy_instal:17,ect:6,edu:8,effect:[6,11],effici:16,egg:17,ego:[7,10],elem:0,element:[7,14],els:23,embed:4,embedding_s:4,enabl:24,encod:[4,7,19],encoder_embedding_s:4,encoder_hidden_dim_list:4,encount:6,end:[1,6,7,9,10,11,14,18,20,21],end_dist:6,end_idx:6,end_loc:7,end_scenario:6,end_timeout:6,engin:[1,2,5,9,13,16,23,25],entangl:22,entir:[6,9,23],entri:26,env:[0,2,3,5,8,10,16,18,19,21,23,24,26],env_cfg:[10,22],env_id:13,env_manag:[0,2,13,18],env_num:[18,19,26],env_param:0,env_util:7,env_wrapp:18,envalu:2,envirion:1,environ:[0,1,2,5,7,8,9,10,13,15,16,19,23,26],envmanag:[0,2,5,9,13],episod:[0,1,2,5,6,9,10,12,14],episode_00000:11,episode_00001:11,episode_count:0,episode_metadata:11,episode_num:18,episode_per_suit:2,episodes_data:0,episodes_per_suit:18,equal:[5,13],error:[6,17],essenti:10,establish:[6,10,22],et:9,etc:[6,8,13,21,23],eu:17,eval:[3,5,9,10,13,18,19,23],eval_config:26,eval_mod:13,evalu:[1,2,12,13,16,17,19,23,25],evalut:19,even:[10,16,22],event:[1,7],everi:[0,2,7,15],everyth:[17,21],eviron:[7,10],ex:[17,19],exactli:10,exampl:[5,9,10,13,14,15],execut:4,exist:[6,10,16],exp:[18,24],expect:14,expert:[5,24],explain:[11,14],extern:13,ey:[4,6,14,15,21,26],fail:[1,10],failu:10,failur:[1,2,10],fals:[4,7,14,18],faq:[16,17],farthest:7,fast:22,fc:[4,18],featur:[4,10],feel:16,felip:18,file:[0,1,2,7,8,9,10,11,15,16,21,24],find:[0,2,6,8,9,14,22],finish:[10,24],first:[1,2,16,17,21,24],fix:[8,10,11,22],flexibl:16,flow:23,folder:[0,8,11,15,18,19,24],follow:[1,4,5,8,10,11,13,14,16,17,21,22,23,26],follw:11,forg:8,form:[0,2,5,10,11,23],format:[1,11],forward:[0,2,4,5,13,14],found:[8,15,18,26],fov:14,fp:[14,24],frame:[0,1,4,6,11,14,15],frame_skip:[15,26],framework:23,free:[6,16,20,22],freeli:11,frequenc:2,frequent:[4,6],from:[0,1,2,4,6,7,8,9,10,11,13,14,17,23,26],front:[7,18,24],front_rgb:14,full:[9,18],fulli:4,fulltown01:[9,18],fulltown02:[9,18,26],fulltown04:9,g:[17,24],ga:18,gail:23,gauss:4,geforc:24,gener:[0,4,6,12,14,23],geo:8,geos_c:8,get:[0,1,4,5,6,7,8,10,14,15,16,23,24,26],get_criteria:6,get_incoming_waypoint_and_direct:7,get_inform:6,get_navig:6,get_observ:1,get_sensor_data:6,get_sensors_data:7,get_stat:6,get_train_sampl:5,get_waypoints_list:7,gif:[1,7,15,26],git:17,github:17,give:18,given:4,global:[7,14,22],go:14,goal:[1,6],gohlk:8,gpu1060:26,gpu:[17,18,19,22],gpu_id:22,graph:13,greatli:16,green:14,guid:[12,17,22],guidanc:22,guidenc:16,gym:[1,10,16,23],gz:17,h:[4,14],ha:[1,5,7,14,18,22],half:4,hand:[9,16,22],handl:[10,13],handler:7,happen:[1,6,8],hard:[10,14],hardwar:[17,24],have:[0,2,5,7,8,11,13,14,16,17,23,24,26],hawk:9,head_embedding_dim:4,help:23,here:[9,14,15,24,26],hero:[1,4,6,7,10,14,23],hero_play:[1,6],hero_vehicl:7,hidden:4,hidden_dim_list:4,high:16,histor:17,histori:7,home:16,host:[1,6,10,17,21,22,24,26],hostport:24,hour:[19,24,26],how:[15,19,24,26],howev:10,http:[8,17],i7:[24,26],i:[13,17],icra:18,id:5,ieee:18,ignor:[1,8,9,26],il:[9,10,22,24],imag:[4,6,7,11,12,14,15,18,21,22,23,26],image_cut:18,imit:[9,16,23,25],immedi:23,implicit:[9,20],impuls:7,includ:[6,10,14,15,16,18,23,24],inclut:6,incom:[1,7],index:[0,6,11,21],indic:16,individu:[10,22],indivisu:10,industri:16,info:[1,6,7,14,15],infom:0,inform:[1,6,7,9,11,12,13,15,18,23,26],inherit:1,init:[1,5,6,7,10,13,14],init_w:4,initi:[1,5,7],initla:7,inproceed:18,input:[4,5,7,13,16,18,24,26],instal:[16,22],instanc:[0,1,2,4,5,6,10,13,14,16,19],instant:23,instantan:7,instruct:[10,14,21],integr:[4,16],intel:26,intellig:[10,16],intens:14,interac:10,interact:[0,1,2,5,6,14,23],interfac:[0,1,2,4,5,6,7,10,13,14,16],intern:[13,16,18],introduc:[10,18],invok:4,involv:23,ip:[1,17,19],irl:23,is_crit:4,is_failur:1,is_junct:14,is_success:1,item:15,iter:[2,23],its:[0,5,6,7,9,11,14,17,22],itself:10,j:9,join:18,jpeg:8,json:[0,10,11,21],judg:[2,7],judgement:[1,23],junction:[6,14],just:[8,13,17,22,24],k_d:4,k_i:4,k_p:4,keep:[7,13],kei:[0,5,10,11,14,15,21],kernel:4,kernel_s:4,kind:[5,7,9,13,16,23],km:[4,14],koltun:18,kwarg:[1,4,6],l1:18,label:[13,18],lane:[7,9,14,19,23],larg:26,last:[1,7,11,24],later:4,laterli:23,latter:6,layer:4,leanr:19,learn:[1,5,9,10,13,16,17,23,25],learn_mod:13,learner:[13,23],learning_r:18,learning_rate_decay_interv:18,learning_rate_decay_level:18,learning_rate_threshold:18,left:14,legal:1,len_thresh:7,length:[1,4,7],level:4,lfd:8,libcarla:[6,7],libgeo:8,libpng16:8,librari:8,licens:16,lidar:14,lidar_nam:11,lifetim:6,light:[1,6,7,10,14,15,26],lightweight:16,like:[7,9,10,11,13,18,21,24],limit:[7,14],line:[7,8,14,17],lingang:16,link:[6,8,22],linux:17,list:[0,4,5,6,7,9,14,15,19,22],literatur:[9,10,16],lmdb:[0,11],load:[1,6,11],load_state_dict:13,local:[6,7,14,17],localhost:[1,6,18,21,24,26],locat:[4,6,7,10,11,14],log:[1,4,8,19,26],log_dir:19,log_std_max:4,log_std_min:4,logdir:26,logic:[10,13],longitudin:4,look:[11,17],lopez:18,loss:[13,24],loss_funct:18,low:[4,16],lower_fov:14,lsof:17,machin:24,mai:[1,5,6,7,8,10,11,13,14,17,21,26],main:1,mainli:[2,16,22],make:[0,1,5,6,8,9,10,11,13,14,16,19,22,26],make_dataset_path:0,make_index:0,malici:10,manag:[0,1,2,6,22],mani:19,manual:[8,10,22],map:[6,9,10,11,13,14,19,21,22,23],matthia:18,max:4,max_brak:4,max_steer:4,max_throttl:4,mean:[4,11,26],meanwhil:10,measur:[0,6,12,18],measurements_00000:11,meet:17,memori:[17,26],messag:6,met:14,meta:0,metadata:12,metainfo:0,method:[0,1,2,5,6,7,9,10,13,14,15,16,18,21,22,23],metric:12,mid:14,miiller:18,mimic:[18,24],min:4,min_dist:[7,14],minut:11,mkdir:[17,19],mode:[1,5,13,14,22,23],model:[3,13,16,23,25],model_configur:18,model_path:19,model_rl:19,model_supervis:19,model_typ:18,model_wrapp:4,modifi:[14,16,17,18,19,23,24,26],modul:[8,9,13,14,16,23],modular:16,monitor:26,more:[7,10,13,14,15,18,19,26],most:[6,23],mostli:10,ms:11,much:22,multi:[6,9,24],multimod:9,multipl:[19,22],must:[0,2,4,6],my_polici:13,mypolici:13,n:[17,22],n_episod:0,n_pedestrian:[6,14],n_sampl:13,n_vehicl:[6,14],name:[6,7,10,11,14,18,21],namedtupl:1,natur:13,navig:[1,6,7,10,12,18,21,23,24,26],ndarrai:[1,14],nearbi:[7,14],necessari:11,need:[1,7,8,10,14,16,17,19,21,26],network:[4,13,18,23],neural:[4,13,18,23],neuron:18,newest:7,next:[6,7,14,22,24],nice:26,nn:[13,23,26],no_rend:14,node:[7,14],node_forward:14,nois:[4,5,18],noise_kwarg:4,noise_len:4,noise_rang:4,noise_typ:4,none:[0,1,2,4,5,6,7,14,15,18],noon:14,normal:24,note:[0,1,2,17,24,26],noth:1,now:[17,24],np:[1,14],npc:[6,9,10,14],npy:24,num:[0,7,9,14,24,26],num_class:18,number:[7,9,11,15,22],number_frames_fus:18,number_images_sequ:18,number_iter:18,number_of_branch:18,number_of_hour:18,number_of_loading_work:18,nvidia:[17,22],ob:[1,4,10,11,13,14,15,18,21],obei:10,oberv:14,object:11,obs_cfg:[0,7],obs_shap:4,observ:[0,1,4,5,7,11,13,14,15,21,23],obtain:[1,7],occupi:22,od:9,off:[1,6,14,26],off_road:6,offici:17,often:8,ok:17,old:[6,8],ollid:1,onc:[0,2,7,9,24],one:[1,2,4,6,7,8,9,11,13,14,15,19,22],ones:7,onli:[0,1,2,5,10,14,16,22],onlin:15,onto:15,open:16,opendilab:[16,17],oper:[5,10,23],option:[0,1,2,4,5,6,7,13,14,15,17],order:[1,9,10,11,13,14,23],organ:11,orient:[4,6,11,14],oserror:8,other:[0,1,5,7,9,10,12,13,14,16,23,26],otherwis:19,out:1,output:[4,13,15,16,21,23,24,26],overtak:7,overview:12,own:[13,14,17],p:22,pack:17,packag:17,page:[16,17,18,22],paint:[7,14,15],pair:7,paper:[18,19],parallel:[9,13],param:[0,1,2,9],paramet:[1,2,10,22,23,26],paremet:22,parent_actor:7,pars:[9,10],parse_routes_fil:10,parse_scenario_configur:10,part:[16,21,23,24,26],partit:11,pass:[0,9,10,13],path:[0,8,15,19,24,26],path_to_your_checkpoint:24,path_to_your_dataset:24,pcm:8,pe:2,pedestrian:[6,9,11,14],per:26,percept:[18,23],perform:[4,10,12,24],physic:22,pictur:26,pid:[4,5,13],pilot:14,pip:[8,17],pipelin:18,pixels_ahead_vehicl:14,pixels_per_met:[14,18,21],plan:[16,23],planner:[6,7,12,18,23],planner_dict:14,platform:[1,16],player:6,pleas:24,plug:8,png:[8,11],point:[6,10],points_per_second:14,polici:[0,1,2,3,9,10,12,16,18,23,24,25,26],policy_config:18,policy_hideen_s:4,policy_kwarg:[0,2],polymorph:[13,16],port:[1,6,10,17,19,21,22,24,26],posit:[7,10,14,18,21],position_rang:14,possibl:22,post:0,post_process_fn:0,postpocess:11,power:13,pre:[19,26],pre_train:18,predict:[18,24],preload_model_alia:18,preload_model_batch:18,preload_model_checkpoint:18,prepar:19,prerequisit:[16,25],print:[1,7,14,24],probabl:26,problem:17,procedur:[13,23],proceed:14,process:[0,11,16,18,24,25,26],process_transit:5,promot:23,properti:[0,1,2,6,13],proport:4,prosedur:11,provid:[0,1,2,5,6,7,9,11,14,16,21,22],pth:[18,19],publish:8,pull:22,put:[13,15],py3:17,py:[10,18,19,21,24,26],pyenv:8,pypi:17,python:[8,10,14,16,19,21,22,24,26],pythonapi:17,pythonlib:8,pytorch:[16,17],queue:[2,7],quick:[16,18,22],quickli:[9,10,16,21,25],r:26,rain:14,raini:14,rais:[10,17],ran:[6,14],ran_light:6,random:[1,6,11,14],randomli:[1,10,14],rang:[4,7,14],rate:[9,10,18,24],re:18,reach:4,ready_ob:13,real:[4,10,14,16,24],real_brak:11,real_steer:11,real_throttl:11,realiz:[13,16],reason:22,receiv:7,recommend:[16,22],record:[1,6,7,14,15,17],red:[6,7,14],redesign:10,reduc:16,refer:[10,12,24],reflect:10,regardless:22,regist:7,reinforc:[1,5,13,16,17,23,25],reinstal:8,relat:[1,5,6,17],releas:[1,7,17,22],remain:[6,14],remov:[7,18],render:[1,2,7,14,15,23],renfirc:16,repeat:[4,10],replac:6,replai:[23,26],repositori:17,repres:[9,10,11,23],requir:[7,17],research:24,reset:[0,1,2,5,6,9,10,13,21,22],reset_param:2,resnet34:18,resolut:[14,18],resourc:1,respect:1,result:[1,2,13,14,15],retriv:1,review:23,reward:[1,2,10,15,21,23],rgb:[14,15,18,21,24],right:14,rl:[9,10,16,17,19,22,25],road:[1,6,7,9,10,14,15,16],roadopt:7,robot:18,roll:23,root:19,rotat:[14,18,21],rotation_frequ:14,rotation_rang:14,rout:[1,6,7,9,10,14,19,21,23],route_fil:10,route_pars:10,routepars:10,router:7,rpc:17,rtx:24,run:[0,1,2,4,5,6,7,8,9,12,13,15,16,19,22,23,24,25,26],run_step:[6,7],run_visu:7,runner:10,runtim:[1,2,22],s3:17,s:[1,7,9,13,14,15,22,26],safe:7,safeti:7,same:[1,5,6,7,10,11,13,14,22,24,26],sampl:[0,12,13,18,21,23,24,26],save:[0,1,5,6,7,11,15,19,24,26],save_dir:[0,15,19,24,26],save_episodes_data:0,save_schedul:18,saver:[0,24],scalar:4,scenario:[1,6,10,16,25],scenario_fil:10,scenario_manag:6,scenario_nam:10,scenario_pars:10,scenariocarlaenv:[3,10,21],scenarioconfigurationpars:10,scenarioenv:10,scenariosimul:10,scneario:6,screen:[1,7,15,21,24,26],scrip:24,script:17,search:7,second:[4,14],section:11,see:[17,21,24,26],seed:[1,9,11],segment:14,select:[10,14,18,23],semant:4,send:[6,22],sens:[8,14],senser:11,sensor:[1,6,7,12,15,18,21],sensor_data:0,sensor_util:7,sensorhelp:3,sent:1,server:[1,6,14,16,18,19,21,24,25,26],set:[1,2,4,5,6,7,9,10,13,14,15,16,18,19,22,26],set_destin:7,set_rout:7,setup_sensor:7,setuptool:8,sevar:10,sever:[0,2,5,6,9,10,13,14,22],sh:[17,22,24],shanghai:16,shape:4,share:13,shared_memori:18,should:[1,2,5,11,13,24],should_ev:2,show:[7,8,9,10,14,15,21,22,24,26],show_text:15,shown:[10,11,14,21],side:[4,22],signal:[1,4,5,6,13,26],similarli:23,simpl:[1,9,10,16,25],simple_rl:26,simplecarlaenv:[3,11,21,22],simpli:[1,8,14,16,17,21,26],simplifi:16,simualt:16,simualtor:[6,7,14,22],simul:[0,1,3,7,8,9,10,11,12,15,16,17,18,21,22,23],simulator_util:7,simultan:22,singal:[18,24],singl:[1,2,6,9,10,19,21,24],singlecarlaevalu:3,situat:15,size:[4,14,18,21,26],skip:15,sky:19,slave:8,small:26,so:[1,6,7,10,14,15,18,22,23],soft:14,solv:8,some:[1,5,6,7,9,10,13,14,15,17,22,23],someth:19,sound:8,sourc:[0,1,2,4,5,6,7],sourec:16,space:1,spawn:[11,14],special:[0,5],specif:[1,5,10],specifi:[8,10,14,22],speed:[4,6,7,11,14,18,24,26],speed_branch:18,speed_factor:18,speed_limit:14,speed_modul:18,speed_thresh:7,srunner:10,standard:[0,1,5,9,10,14,16,18,23,26],start:[0,1,5,6,7,9,10,11,14,16,18,19,24,25],start_episod:0,start_loc:7,state:[1,6,7,14,15],state_dict:13,statu:[1,2,5,6,10,12,23],std:4,steer:[4,5,11,18,24],steernoisewrapp:3,step:[1,4,6,7,11,14,15,18,22,24],stochasticli:4,storag:24,store:[0,1,2,5,6,7,10,11,13,14,23],str:[0,1,4,6,7],straight:[9,14],straightli:1,straighttown01:19,stride:4,structur:[1,12],stuck:[1,7],stuck_detector:7,stuck_is_failur:18,stuckdetector:3,sub:14,subprocess:19,succe:[1,10],success:[1,2,9,10,23],successfulli:[1,17],sucha:6,sudo:8,suggest:[11,14],suit:[0,1,2,9,10,11,13,18,19,26],suitabl:[10,13,18,23],sunset:14,supervis:[5,13,19],supervised_model:19,supervised_model_path:19,support:[5,14,16,18,23,24],suppos:1,sure:[0,6,22],surround:[6,7],sync:[14,22],sync_mod:14,synchron:[7,14,22],system:[6,8,17,22,26],tabl:24,tag:[11,14,15,17],tailgat:7,take:[4,6,7,14,15,18,24,26],taken:7,tar:17,target:[1,4,5,6,7,9,14,16,18,25],target_forward:14,target_loc:4,target_spe:[4,18],task:[1,16],tcp:[1,6,22],tensor:4,tensorboard:26,term:4,termin:26,test:[9,10,13,16,19],text:15,than:14,thecarla:6,thei:[9,10,14],them:[0,2,7,8,11,21],thi:[1,6,7,8,10,13,14,15,16,17,18,21,22,24],thread:24,three:[9,10,13,14,24],thresh:7,threshold:[7,14],throttl:[4,11,18,24],through:[14,21,22],throughout:14,thu:23,thw:4,tick:[1,6,7,11,14,22],time:[1,4,6,7,13,14,22,24],timeout:[6,7],timestamp:[11,14],titl:18,tl_di:[11,14],tl_state:[11,14],tm:[22,26],tm_port:[1,6,22],tocarla:6,togeth:[6,10,13,23,26],too:26,tool:[10,16],toolkit:10,top_rgb:14,torch:4,total:[1,9,11,14],total_diat:6,total_light:14,total_lights_ran:14,town01:[9,14,19],town02:[9,19],town03:10,town04:[10,19],town05:10,town1:9,town2:[9,19],town:[6,9,10,11,14,19],town_nam:6,trace:[6,7],track:[7,14],traffic:[1,6,7,10,14,15,22,26],trafficlighthelp:3,train:[2,9,10,13,16,17,22,23,25],train_config:[18,26],train_data:13,train_dataset_nam:18,train_host_port:19,train_it:2,train_rl:19,train_sl:19,trajectori:0,tree:1,trigger:[1,10],tune:26,tupl:[1,4,7],turn:[9,14],tutori:[16,18,24],two:[4,11,14,15,21,23],txt:[0,9],type:[4,8,10,11,14,15,18,21,26],ubuntu:[8,17,26],uci:8,uncontrol:10,under:[13,16,17,18,24],unifi:[11,14,16],uniform:4,union:[0,4],unless:2,unreach:7,unsuccessfulli:1,up:[4,6,7,9,10,14,17,18,24],updat:[5,6,7,22,23],upper_fov:14,urban:[9,20],us:[0,1,2,4,5,6,7,8,9,10,11,13,14,15,16,17,18,20,21,22,23,24,25],usag:[10,16],user:[0,2,5,7,9,10,11,13,14,15,16,17,22],usual:[8,13,22,24,26],util:[1,3],v100:19,v1:[9,18],v2:[9,26],v3:9,v4:9,val_host_port:19,valu:[1,2,4,5,7,14],vari:[23,26],variable_weight:18,varieti:16,variou:[10,13],vector:[4,14],vehicl:[1,4,5,6,7,9,10,11,14,16,18,22,23,24],vehiclepidcontrol:3,verbos:[14,18],veri:[10,26],version:[6,8,9,17,23],via:[16,18,25],video:[1,7,15,26],view:[4,6,14,15,21,26],visual:[1,2,3,12,16,18,23,24,25,26],visualizas:15,vladlen:18,vsiualiz:26,wai:[5,7,13,16,19,26],wait:22,walker:[6,7,10,14],want:[17,19,21,24,26],wapoint:7,watch:15,waypoint:[1,4,5,6,7,9,11,14,16,25],waypoint_list:14,waypoint_num:[7,14,18],we:[9,10,11,14,15,17,21,24,26],weather:[6,9,10,11,14,22],weight:[4,26],well:[5,10,16,21,23],west:17,wet:14,wget:17,what:[10,13],whatev:21,wheel:[8,14],when:[0,1,5,6,7,10,13,14,15,21,22,24,26],whether:[1,2,4,6,7,14,15,17],which:[1,4,5,6,9,10,13,14,21,22,23],wide:[9,18],window:[7,8,17],winerror:8,within:[4,7],without:[0,2,10,16],work:[1,5,13,21,26],worker:13,world:[6,7,14,17,22,23,24],wrap:[1,4,9],wrapper:[1,4],write:0,written:26,writter:7,wrong:[1,6],wrong_direct:6,www:8,x86_64:17,x:14,xiao:9,xml:[10,21],xvzf:17,xxx:10,xxx_mode:[5,13],y:[9,14],year:18,yellow:14,you:[8,9,10,14,15,16,17,18,19,21,24,26],your:[8,14,19,21,22,24,26],yourself:8,zoo:16},titles:["data","envs","eval","API Doc","models","policy","simulators","utils","FAQ","Benchmark Evaluation","Casezoo Evaluation","Datasets","Features","Policy Features","Simulator Features","Visualization","DI-drive Documentation","Installation","Conditional Imitation Learning","End-to-End Model-Free Reinforcement Learning for Urban Driving using Implicit Affordances","Model Zoo","Auto policy running and visualization","Carla tutorial","Core Concepts and Processes","Simple Imitation Learning","Tutorial","Simple Reinforcement Learning"],titleterms:{"import":8,No:8,afford:19,alsa:8,api:[3,17],auto:21,autopolici:5,basecarlaenv:1,basecarlapolici:5,basesimul:6,basic:22,basicplann:7,behaviorplann:7,benchmark:[9,11,19],benchmarkdatasetsav:0,benchmarkenvwrapp:1,bevspeedconvencod:4,bevspeeddeterminatenet:4,bevspeedstochasticnet:4,can:8,carla:[8,14,17,22],carlabenchmarkcollector:0,carlabenchmarkevalu:2,carlaenvwrapp:1,carlascenariosimul:6,carlasimul:6,casezoo:[10,21],collect:[18,24],collisionsensor:7,common:14,concept:[22,23],condit:18,configur:14,confxxx:8,content:16,core:23,cost:19,creat:22,data:[0,11,18],dataset:[11,24],di:[16,17,26],doc:3,docker:22,document:16,download:17,drive:[16,17,19,26],easy_instal:8,egg:8,end:19,engin:[17,26],env:1,episod:11,error:8,eval:2,evalu:[9,10,18,24,26],faq:8,featur:[12,13,14,16],free:19,gener:11,get:17,guid:10,imag:9,imit:[18,20,24],implicit:19,inform:14,instal:[8,17],learn:[18,19,20,24,26],lib:8,libjpeg:8,libpng:8,main:16,measur:11,metadata:11,method:20,metric:9,model:[4,18,19,20,24,26],navig:14,other:[11,20],overview:[10,14],perform:9,planner:14,polici:[5,13,21],prerequisit:[17,26],problem:8,process:23,python:17,q1:8,q2:8,q3:8,q4:8,q5:8,quickli:22,refer:9,reinforc:[19,20,26],rl:26,run:[10,14,17,21],sampl:9,scenario:21,scenariocarlaenv:1,sensor:[11,14],sensorhelp:7,server:[17,22],shape:8,simpl:[24,26],simplecarlaenv:1,simul:[6,14],singlecarlaevalu:2,start:21,statu:14,steernoisewrapp:4,structur:11,stuckdetector:7,tabl:16,target:21,trafficlighthelp:7,train:[18,19,24,26],tutori:[22,25],urban:19,us:[19,26],util:7,vehiclepidcontrol:4,via:22,visual:[7,15,21],waypoint:21,zoo:20}})