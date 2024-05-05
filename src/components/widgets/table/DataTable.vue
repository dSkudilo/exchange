<template>
  <SimpleTable :fixedHeader="fixedHeader" class="rounded" >
    <thead>
      <DataTableTr>
        <DataTableTh
          v-for="item in headers"
          :key="item.name"
        >
          {{item.title}}
        </DataTableTh>
      </DataTableTr>
    </thead>

    <tbody >
      <DataTableTr
        v-for="item in list"
        :key="item.id"
      >
        <slot
          v-for="(header, id) in headers"
          :key="header.key"
          :name="header.key"
          :item="getItem(item, header.field, id)"
          :data="item"
        />
      </DataTableTr>
    </tbody>

    <template #bottom>
      <slot name="bottom"/>
    </template>
  </SimpleTable>
</template>
<script setup>
import {SimpleTable} from "@/components/ui/facades/simpleTable";
import DataTableTr from "./ui/DataTableTr";
import DataTableTh from "./ui/DataTableTh";
import {getItem} from "./model/helpers";

defineProps({
  fixedHeader:{
    type: Boolean,
    default: false
  },
  list:{
    type: Array,
    default: () => ([])
  },
  headers:{
    type: Array,
    default: () => ([])
  },
})
</script>
