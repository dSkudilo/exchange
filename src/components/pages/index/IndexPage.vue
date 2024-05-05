<template>
  <SimpleContainer>
    <SimpleRow>
      <SimpleCol md="4" cols="12" >
        <SimpleCard>
          <template #title>
            <CardTitle>Валютная пара</CardTitle>
          </template>
          <SimpleSelect
            v-model="selectedCurrencyId"
            :items="list"
            hide-details
            item-title="name"
            item-value="id"
          />
        </SimpleCard>
      </SimpleCol>

      <SimpleCol md="8" cols="12">
        <DataTable
          fixed-header
          :list="logs"
          :headers="headers"
          class="index-table"
        >
          <template #prevVal="{item}">
            <DataTableTd>
              {{item.name}}
            </DataTableTd>
          </template>
          <template #newVal="{item}">
            <DataTableTd>
              {{item.name}}
            </DataTableTd>
          </template>
          <template #createdAt="{item}">
            <DataTableTd>
              {{item}}
            </DataTableTd>
          </template>
        </DataTable>
      </SimpleCol>
    </SimpleRow>
  </SimpleContainer>
</template>
<script setup>
import {SimpleContainer} from "@/components/ui/facades/simpleContainer";
import {SimpleRow} from "@/components/ui/facades/simpleRow";
import {SimpleCol} from "@/components/ui/facades/simpleCol";
import {SimpleCard} from "@/components/ui/facades/simpleCard";
import {SimpleSelect} from "@/components/ui/facades/simpleSelect";
import CardTitle from "./ui/CardTitle";
import {useData} from "./model/useData";
import {useCurrency} from "@/stores/currency";
import {useLogs} from "@/stores/logs";
import {DataTable, DataTableTd} from "@/components/widgets/table";
import {headers} from './model/tableConfig'
import './style/index.scss'

const storeCurrency = useCurrency()
const storeLogs = useLogs()
const {
  list,
  logs,
  selectedCurrencyId,
} = useData(
  storeCurrency,
  storeLogs
)
</script>
