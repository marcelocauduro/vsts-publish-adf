"use strict";
/*
 * VSTS Delete ADF Items Task
 *
 * Copyright (c) 2018 Jan Pieter Posthuma / DataScenarios
 *
 * All rights reserved.
 *
 * MIT License.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const task = require("vsts-task-lib/task");
class TaskParameters {
    constructor() {
        try {
            let rootPath = task.getVariable("System.DefaultWorkingDirectory") || "C:\\";
            this.connectedServiceName = task.getInput('ConnectedServiceName', true);
            this.resourceGroupName = task.getInput('ResourceGroupName', true);
            this.datafactoryName = task.getInput('DatafactoryName', true);
            this.servicePath = task.getPathInput('ServicePath', false, true);
            this.pipelinePath = task.getPathInput('PipelinePath', false, true);
            this.datasetPath = task.getPathInput('DatasetPath', false, true);
            this.triggerPath = task.getPathInput('TriggerPath', false, true);
            // Replace "" with null
            this.servicePath = this.servicePath.replace(rootPath, "") === "" ? null : this.servicePath;
            this.pipelinePath = this.pipelinePath.replace(rootPath, "") === "" ? null : this.pipelinePath;
            this.datasetPath = this.datasetPath.replace(rootPath, "") === "" ? null : this.datasetPath;
            this.triggerPath = this.triggerPath.replace(rootPath, "") === "" ? null : this.triggerPath;
            this.continue = task.getBoolInput('Continue', false);
        }
        catch (err) {
            throw new Error(task.loc("TaskParameters_ConstructorFailed", err.message));
        }
    }
    getConnectedServiceName() {
        return this.connectedServiceName;
    }
    getResourceGroupName() {
        return this.resourceGroupName;
    }
    getDatafactoryName() {
        return this.datafactoryName;
    }
    getServicePath() {
        return this.servicePath;
    }
    getPipelinePath() {
        return this.pipelinePath;
    }
    getDatasetPath() {
        return this.datasetPath;
    }
    getTriggerPath() {
        return this.triggerPath;
    }
    getContinue() {
        return this.continue;
    }
}
exports.TaskParameters = TaskParameters;
//# sourceMappingURL=taskParameters.js.map