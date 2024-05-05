<template>
  <SimpleApp>
    <SimpleAppBar>
      <template #prepend>
        <SimpleAppBarNavIcon
          class="mr-2"
          @click="toggleHandler"
          :title="btnTitle"
        />
      </template>

      <template #logo>
        <router-link :to="{name: '/'}">
          <AppLogo/>
        </router-link>
      </template>

      <template #title>
        <AppName/>
      </template>
    </SimpleAppBar>

    <SimpleNavigationDrawer v-model="isOpen">
      <AppSub/>
      <SimpleDivider/>
      <router-link
        v-for="item in menuList"
        :key="item.routeName"
        :to="{name: item.routeName}"
        class="text-decoration-none text-white"
        :title="item.name"
      >
        <SimpleListItem :title="item.name" link/>
      </router-link>
    </SimpleNavigationDrawer>

    <SimpleMain>
      <router-view />
    </SimpleMain>
  </SimpleApp>
</template>
<script setup>
import {AppLogo} from "@/components/ui/appLogo";
import AppName from "./ui/AppName";
import AppSub from "@/components/widgets/layouts/default/ui/AppSub";
import {menuList} from "./model/menuList";
import {SimpleListItem} from "@/components/ui/facades/simpleListItem";
import {useDrawerState} from "./model/useDrawerState";
import {SimpleAppBar} from "@/components/ui/facades/simpleAppBar";
import {SimpleAppBarNavIcon} from "@/components/ui/facades/simpleAppBarNavIcon";
import {SimpleNavigationDrawer} from "@/components/ui/facades/simpleNavigationDrawer";
import SimpleDivider from "@/components/ui/facades/simpleDivider/SimpleDivider";
import {SimpleApp} from "@/components/ui/facades/simpleApp";
import {SimpleMain} from "@/components/ui/facades/simpleMain";

const {
  isOpen,
  toggleHandler,
  btnTitle
} = useDrawerState()
</script>
