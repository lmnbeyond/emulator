/*
 *
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
 *
 */
module.exports = {
    installApplication: function (success, error, args) {
        console.log('installApplication is invoked:' + args[0]);
    },
    updateApplication: function (success, error, args) {
        console.log('updateApplication is invoked:' + args[0]);
    },
    uninstallApplication: function (success, error, args) {
        console.log('uninstallApplication is invoked:' + args[0]);
    },
    startApplication: function (success, error, args) {
        console.log('startApplication is invoked:' + args[0]);
    },
    closeApplication: function (success, error, args) {
        console.log('closeApplication is invoked!');
    },
    listInstalledApplications: function (success, error, args) {
        console.log('listInstalledApplications is invoked!');
        var apps = [];
        success && success(apps);
    },
    listPresetAppPackages: function (success, error, args) {
        console.log('listPresetAppPackages is invoked!');
        var presetApps = [];
        success && success(presetApps);
    },
    getStartAppInfo: function (success) {
    //TODO:Get start app info from config.xml
        var info = {
            appid: 'app',
            height: 480,
            width: 800,
            icon: null,
            name: 'app',
            type: null,
            version: '1.0.0'};
        success && success(info);
    }
};
