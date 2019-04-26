import { observable, computed, action, autorun, when } from "mobx";
import uuid from "uuid/v4";
import _ from "lodash";
import {IRule, IRulesStorage, GameRule} from "../common/index";
import { version } from "@babel/core";

export class Rule implements IRule {
    @observable name;
    @observable value;
}

class RulesStorage implements IRulesStorage {
    @observable rules = [
        {
            name: GameRule.Check_Gender,
            value: true,
        },
        {
            name: GameRule.One_Big,
            value: true,
        },
        {
            name: GameRule.One_TwoHanded,
            value: true,
        },
    ];

    @observable _version = 0;

    @computed get allRules () {
        return this.rules;
    }

    @computed get version () {
        return this._version;
    }

    @action toggleRule = (update: IRule) => {
        const ruleIndex = _.findIndex(this.rules, rule => _.isEqual(rule.name, update.name));

        if (ruleIndex >= 0) {
            this.rules[ruleIndex].value = update.value;
            this._version++;
        }
    }

    getData = () => this.rules;
    setData = (data: any) => {
        this.rules = data;
    }
}

export default new RulesStorage();