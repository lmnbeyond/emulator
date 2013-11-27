/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
module.exports = {
    id: "xFace",
    version: "3.2.0",
    name: "xFace",
    type: "platform",
    nativeMethods: {},

    config: ripple('platform/xFace/3.2.0/spec/config'),
    device: ripple('platform/xFace/3.2.0/spec/device'),
    ui: ripple('platform/xFace/3.2.0/spec/ui'),
    events: ripple('platform/xFace/3.2.0/spec/events'),

    initialize: function (win) {
        var honeypot = ripple('honeypot'),
            devices =ripple('devices'),
            device = devices.getCurrentDevice(),
            bridge = ripple('platform/xFace/3.2.0/bridge'),
            cordova,
            get = function () {
                return cordova;
            },
            set = function (orig) {
                if (cordova) return;

                cordova = orig;

                cordova.define.remove("cordova/exec");
                cordova.define("cordova/exec", function (require, exports, module) {
                    module.exports = bridge.exec;
                });
            };

        honeypot.monitor(win, "cordova").andRun(get, set);

        //HACK: BlackBerry does vibration different
        if (device.manufacturer === "BlackBerry") {
            navigator.vibrate = function (ms) {
                ripple('platform/xFace/3.2.0/bridge/vibration').vibrate(null, null, [ms]);
            };
        }
    },

    objects: {
        MediaError: {
            path: "xFace/3.2.0/MediaError"
        },
        Acceleration: {
            path: "w3c/1.0/Acceleration"
        },
        Coordinates: {
            path: "w3c/1.0/Coordinates"
        },
        Position: {
            path: "w3c/1.0/Position"
        },
        PositionError: {
            path: "w3c/1.0/PositionError"
        },
        navigator: {
            path: "w3c/1.0/navigator",
            children: {
                geolocation: {
                    path: "w3c/1.0/geolocation"
                }
            }
        },
        org: {
            children: {
                apache: {
                    children: {
                        cordova: {
                            children: {
                                Logger: {
                                    path: "xFace/3.2.0/logger"
                                },
                                JavaPluginManager: {
                                    path: "xFace/3.2.0/JavaPluginManager"
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};
