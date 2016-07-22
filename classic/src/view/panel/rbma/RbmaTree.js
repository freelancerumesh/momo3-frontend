/* Copyright (c) 2016 terrestris GmbH & Co. KG
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * Instance of `Ext.tree.Panel` containing the structure of the RBMA documents
 *
 * @class MoMo.client.view.panel.RbmaTree
 */
Ext.define("MoMo.client.view.panel.rbma.RbmaTree",{
    extend: "Ext.tree.Panel",
    xtype: "momo-rbma-tree",

    controller: 'panel.rbma.rbmatree',

    viewModel: 'panel.rbma.rbmatree',

    width: '30%',

    collapsible: true,

    collapsed: false,

    viewConfig: {
        plugins: {
            ptype: 'treeviewdragdrop',
            dragText: 'Drag and drop to reorganize'
        }
    },

    bind: {
        title: '{title}'
    },

    listeners: {
        itemclick: 'onItemClick',
        itemcontextmenu: 'onItemContextMenuClick',
        drop: 'onDragDrop'
    },

   /**
    *
    */
    initComponent: function() {
        var me = this;
        var ctrl = me.getController();

        // set the store and load the root node
        ctrl.setRbmaStoreAndRootNode();

        // call parent
        me.callParent();
    }
});
