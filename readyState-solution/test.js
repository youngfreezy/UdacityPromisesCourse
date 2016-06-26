<div class="front-seal-edit">
    <div class="filter-tags-cloud" ng-show="editMode" style="float:left;">
        <div ng-repeat="filterTag in tags track by $index" class="filter-tag">
            <div class="btn-group btn-group-filter">
                <span class="btn btn-filter-tag filter-truncate">{{filterTag}}</span>
                <span class="btn btn-filter" ng-click="vm.removeTag($index)">
                    <span ng-click="removeTag($index)" class="fa fa-times"></span>
                </span>
            </div>
        </div>
    </div>
    <div id="input" style="float:right;">
        <input type="text" ng-show="editMode" class="front-seal-edit" ng-model="frontSeal.selected" ng-keydown="checkEvent($event)"/>
    </div>
</div>