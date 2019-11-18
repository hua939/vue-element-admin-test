<template>
    <div class="menu-wrapper">
        <template>
            <app-link :to="to">
                <el-menu-item>
                    <item></item>
                </el-menu-item>
            </app-link>
        </template>
        <el-submenu ref="subMenu" index="0" popper-append-to-body>
            <template slot="title">
                <item />
            </template>
            <!-- <sidebar-item
                v-for="child in 10"
                :key="child"
                :is-nest="true"
                :item="child"
                :base-path="child"
                class="nest-menu"/> -->
        </el-submenu>
    </div>
</template>
<script>
// import path from 'path'
import Item from './Item'
import AppLink from './Link'
export default {
    name: 'SidebarItem',
    components: { Item, AppLink },
    data() {
        return {
            to: '/'
        }
    }

}
</script>