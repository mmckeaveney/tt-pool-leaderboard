/* @flow */
import React from 'react';
import ActionsTable from 'rapid7-actions-table';
import AssetGroupTags from '../Minor/AssetGroupTags';
import StatusDot from '../Minor/StatusDot';
import SelectableAsset from '../Minor/SelectableAsset';
import type { Asset } from '../../flow/types/';
import './AssetManagementTable.scss';


type AssetManagementTableProps = {
    config: Object,
    assets: Array<Asset>,
    isLoading: boolean,
    showAssetDetails: Function
};

export const AssetManagementTable = (props : AssetManagementTableProps) => {

    const componentConfig = {
        assetGroups: {
            component: AssetGroupTags,
            componentProps: [
                {rowAttr: 'assetGroups', componentProp: 'tags'}
            ]
        },
        hostname: {
            component: SelectableAsset,
            componentProps: [
                {rowAttr: 'hostname', componentProp: 'hostname'}
            ],
            componentFuncs: [
               {componentProp: 'showAssetDetails', func: props.showAssetDetails}
           ]
        }
    };

    let assetTableContent;

    if (props.isLoading) {
        assetTableContent = <p>Loading...</p>;
    } else if (props.assets.length === 0) {
        assetTableContent = <p>No Assets Available.</p>;
    } else {
        assetTableContent = <ActionsTable
            componentsConfig={componentConfig}
            columns={props.config.columns}
            data={props.assets}
            selectableRows={false}
            tableControls={props.config.actions}
            tableOptions={props.config.tableOptions}
        />;
    }


    return (
        <div className="assetManagementTableContainer">
            <section className="card">
                <header className="header settings">
                    <span>Assets ({ props.assets.length })
                    <i className="r7-icon r7-icon-settings-whole settings"></i>
                        <span className="assetTableMetrics">
                            <span>
                                {props.assets.length}
                                <StatusDot status="SUCCESS"/> ONLINE
                            </span>
                            <span>
                                0 <StatusDot status="NEUTRAL"/> OFFLINE
                            </span>
                        </span>
                    </span>
                </header>
                <div className="content">
                    <button className="btn btn-second-level">
                        <i className="r7-icon r7-icon-share-export-arrow"></i>
                    </button>
                    <button className="btn btn-second-level">
                        <i className="r7-icon r7-icon-add-plus"></i>
                        <span>Add Group</span>
                    </button>
                    <button className="btn btn-second-level">
                        <i className="r7-icon r7-icon-log-search-notes"></i>
                        View Logs
                    </button>
                    <button className="btn btn-second-level">
                        Live Query Assets
                    </button>
                    { assetTableContent }
                </div>
            </section>
        </div>
    );
};

export default AssetManagementTable;
