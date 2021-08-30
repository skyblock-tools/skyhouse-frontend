<template>
  <div class="indicator flipIndicator">
    <div class="indicator-item badge badge-primary justAdded">New</div>
    <div class="flipCard card bg-neutral shadow-lg">
      <figure class="cursor-pointer" @click="copyToClipboard" @mousemove="this.$root.Lore.updateLore" @mouseenter="this.$root.Lore.showLore = true; this.$root.Lore.lore = this.lore; this.$root.Lore.parseLore()" @mouseleave="this.$root.Lore.showLore = false">
        <img class="itemImage bg-base-300" :src="image" onerror="this.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAVwnpUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHjarZpZdhw5skT/sYq3BMzDcjCe0zvo5b9riOQgkupSd5UoMjIzJsDd3NwMkWb/+1/H/B//Us3WxFRqbjlb/sUWm++8qPb51+9fZ+P9e//5+Xrlfv3cvO/wbAPb8Oyo+dm6t89fJ7xtXedV+nShOl87xq87WnyNoH65kH82QSPS6/W6UHtdKPhnh3tdoD/TsrnV8nkKYz/b1/lPGPg1+hPrr8P+9r4QvZW4T/B+Bxcsf33wzwCCfp0JnReZvy6wh7+F1+l+8hzqnoD8FCf7aVTma1beX7nffP4lKSE/nxs++DWY+X374+cuffn8dUFzQ/zpzuEDDr983p1LX6fz9nvOquac/cyux0xI82tSb1O5rzhwEPJwT8v8FH4Tr8v9afxUA3onKV922sHPdM150nJcdMt1d9y+2+kmQ4x++8LW+0mi9FkNxTc/gzXkKerHHV9CCytUsjVJb+BT/z4Wd+/b7u2mq9x4OY70jos55dfozz/x89sLnSPIO2fre6wYlxeyGIYyp78cRULcecNRugF++/n6T3kNZDDdMFcm2O14LjGSe2FLOAo30YEDE9un1lxZrwsQIu6dGIwLZMBmF5LLzhbvi3PEsZKfzoWqD9EPUuBS8otR+hhCJjnV696cU9w91if/fAxnkQiVUSE1LXRyFSE28FNiBUM9hRRTSjmVVFNLPYccc8o5lyzy6yWUWFLJpZRaWuk11Fihx1pqNbXV3nwLkGNquZVWW2u9c9POlTtndw7offgRRhxp5FFGHW30CXxmnGnmWWY1s82+/AoLnlh5lVVXW327DZR23GnnXXbdbfcD1E448aSTTzn1tNPfs+bMk9ZvP3+eNfeWNX8zpQPLe9Y4tZS3SzjRSVLOyJiPjowXZQBAe+XMVhejN0qdcmabpyqSZ5RJyVlOGSODcTufjnvP3UfmfsmbifFv5c2/Zc4odf9E5oxS95vMfc/bD1lb6jbTBnMzpDJUUG2g/Dhg1+5rV1P74635b0/42xdqe+W5dz45Hr+ZUGlpLEeWeo7wqxn5+FZ3rquH4laSslip+DgIel/dpdk8gSojt3VoAZycXPKkSi9A3bM1by9+2nJ4sHMU52vdjlvFEpYTWlbYu2uAs2uAG1lTamOEtaTed2yFvKQBrTSf5pgnrzBO9FYz9D225wUd6NvWfNvRC0AJgGS1GEtedLo+4w62h1CPYgVEdkubmkMtjQ76Wt5m7NgdIJnxkPpa9kgL6TVdKjOOkQIIUmzWqGGO4VwdJffkGOqeY5/nrNCMB6oBmO5WY+D+vPUl0bB2A3mx71HiOjb6uobPjMqpbR3faVpul+7C2Y4xmjRST5pG2knRoT9mKjE68H5SYIAhlUWbJJEw7Fm7rw3AJxewHDGqp4XC2bGw6+wznl1nnr29o5pS9XM7mHzMSNXbDVtkBjLO8nue5OvJaUXLyXUtZxp1VPrJnSmkMuxudOLCmSnvtewpO8VOLbo91wRfJwOoU2iwRIoxjcroOY8LcXVGEbYNZdOEDhkh882R7FlzaMkB1bR7p8PHQkD2LDScQzQHdd6ILAMzw0vuwG01u0OT2TDX8AHmOWoTmwCNXmi7YZfgxoSQOghZNZfZD1ciJqtsbwrQI+rcEZk5GGgpkTPHabMtjs3h3uGkrUSfVTr1kmqnRED14NJ5B6jK9GaJzdwZUQkS7fGDeuM+jH2eFmbKlnu4zHxTD/kEcFHqvAgebe70gNlcNDfkEIVFljx42U9JESSfR6/Lj+lKccSilWTL8Sn0Ay8XP8EveKWldAPgqbTpIYkY+wIrBATEho7uqr4fGEStoC6Q0cEKiXOTuy5v6/YxN0BPYaH8WzgVsnc9n+ozwbZun52Od+UM6NwvOBMh1hddCNmcVtutt5EX+o/THUdU+IgjGiCiHArxozJmAKL7tHaoTSIcT5/Mza5FQe+TaU4hUGf5HEZfIZsZ4jAkkPa0Wh6W43TFnFXjg6slOACAHzXHxMwb0mZ3gJLpLH6skeKGFGZtfpiSQfZyMzcKncE0Og8JppnAXQHwR0JtO6BovcQZ3dyAosVjQ9sVwVtX8akUQ69j4oHbbCIAPvYAOECMQaU9TrJrLpX1nirrOdVkVdbFUUwnOVFTAJBDRZ0UFkbwqly3Lc240l1TFr7phsTqMo8UCe8IrB+DNlgmho4mXExcLRDHMhvgoTWiLx31DdeOfonStzhLQSDSUS1EOYOjM5JYYk5LvgwYwjApvigQnNX5cCAM28flwP3GgfnF26PZ7X9hbPCeubhZE9qzIKwuerd+0eoJfzDgYoon+Y6MCY1TmL1ffnaaW0+3uTk1t7EXNzXC+GXztiWp0SSkpFsFxbataex8EXkmrMumdYTCBopUUxKDSEjtZo4wZ+HTniVwvd0MY1GpUDdKI/mWYplTwR7kYp5B9YIsdAj7FO1995lRyglwaxH0lszFO7dObCV3cGLOqrnBUxs9Rj2nrHdPrFqd33t/Z/KZNlX67QaiPo6HEunVoj3Q21vDGgXGBQ6jGMP15opxFBpFPeF96T4gh4ycDbVYIBdNu7gD+s6LhGl2dsJhHQ3QKVl/T0Kx2Qrz+5yRfHQNUBE5zlNDlhYOdmDEXSF7sV6tLqvPW9jCTdzXLASFNpIItmCFGtHCRi+ObAcPsa3bHUE6HOATlBFXpQIsJe3C3b87sIQzpuo0Jotgp7cPBG6dx4dir9hoHQJRg9VMN2UPLdKimClESQkwT/X2EmZod8T5YEXXaAx50T2w0uyjk3PNpCE/SkAitFfkrZ0yvjJG+MdW8p1GkxlK3uzCOIu6BPOwOaGaCfRAl6cG+S/aKb4IemJQKGdVjp+Mtg7KKTGC4Jb6rikbklqSYWIlYEQvTw9kBq6sYnJJjkvItnkVWOL3eaGFlNeWGNGH+20SjmLyHijakzOgEMPB8LAAfk8qCwUNcAppapC7ZSw+Qw4VKbwL7qgWuhcdnrEHMk7sVJYzpyvpnBTdyPuD6iat0cK6jAOcFIU8QfGm1oHer25DsijQnZE9tAxunc9Yq4qbNvdwc9BBkVkMlB4BUgnauqIBBKVp2tGawuidUDWq0tHV1IaQQJRRqvT4TK/l4qFd9cctpyY5B8inh5QRyznNCLEqhDGZouvQ7rMHEnl2vXYsDOchLmgEuhFUxjt48r4boTeDh+stEzDQCD8sHAlUBhVuqcxJ3Tq0rWuhjtEz7dipnjHYvuy9Btya0iJ4Zq6EcKfMAeuSsjjUcIcZF2QEjVLeNDgU/aBG6dvkr3GxChuhqM5EKhDGvg2JrBPzhrQZNBh6HxMoiAFAfF+/gUcvoA/EX8uKGnVHbXvpaAKWTcDPVTtLxm5OzW2LYUqVIJLE2rKAKGVN2O2scnHzVE2ahhKxGQwVLjYH7tn4xzmVV4jA94oF8DAxCIHgpIVg6SJAVLrlrFYrdRVuoHDISt8Bj2wW46eH53AyyoPhLNfZiXE7E1BzNKgvCHpIZ4PL1LChZB6GXRuGmYCNOAwDfLGDzVO5fH5o9dAPNiFNNxhfi1oEQVoKpSTo0jQ3IkAq+rlCweHOuUyknzLxEpjRXgfiSjSdtdAkQ6Isr57RqyhK9GAj7/BtFMcjZxAjXArzTiKM3JJa4aakAqLU7RokuRQY6p9ujX8beHACU9oTmAEWN3mmIcbgh8hnKv0bXLCrAyfChvLEKFexaQazqNaFjJG64KhSbFO8EBz4Awq9oKHEThCbAlYIWIIGt5opvpH2aiFG+tdcWbLFSZ1bH8ayHpGD5chFTV6eAZhQ1ObXMXK6Oj3En6KW8TqVdns4noCAD1f0sfDE4UesQG8Z14omoUj2s37wzBL7l5PSoa3AABnVDuFjm+gYLuIi4hm31VtazUKW52liekG2yTnYKQeEgUUZHgqNBt2dj9YJoZTDlhKkGVNFLQ7aCefBFcUeQ4M/7toDdT0xwThdzaGl1jP1d7st5UWjviYCkgziukFENp4O20G3OwZeoeGRarRey3RtEkMCd74w1akBuwdDFFVAyh6ijhilJoLHDtLW6bMLTxuuEJu2t5S59AdYU+qLVEJKKCxppMfpJ5vzOy9+0KL5W7x4x7Cx/hDbhx5s3X2QpRNXTloaQiijmSlJCeJ3ngyfeBLxdaKRoqMoiXhdWnlKXlTJFoVdbL2ZiCuLN6WoAQVshHLbWnaAKD3oXugDg5hD8UO0FSoBFJCE4qpJEknkOtWL29aMkaqScOuSASqCUUcQeUt4GC0z/UoJdb0YAVdPxZf9YlvUw7dW/d6yi0Gn3pta6TQL4hMeOLmVQ8YcnntbaiZGqDpc7GO5UndI5DhliOnqdMpiKHit7lQCT6egrRKLCI1gpFtkbNgaeYsY0CH+TGGaJgMvYILwpW6DKCpmm5Aw8JDjxjA69A9zR7jAuRU9gHrE3UWHB1uDSELawt9RuGjXg8Tjb/Ft/ZjckQytImcl9PEpMFdGdl4RS6igI1pPl/LQGoc0e1URkTVVEp0OXVU7gFygCDmJGkSQ7wBjC76q8N5Ai+c2YwiApAWAqgCSlBW3POG1sGTnNN+W06Cqeo2MZ0blGToJj/nZQdm+diCc73t2Qq7mbEw3vXLnvCpzCjHcdwDh5ha0YW7714QDfrJwYpdqOdFm8wmyZAsOobCK/JgFX2PeN8+yG/vddj8tyXXkmwmUmYQX6tYOaVs6IE1AUqNoge1aHhICMaZAr+3wb+E/UCMHjLxilPQ0C/4TZeoy5V4mvEGMyyw0iMuN3FuKmAgW0UK/S7EHLxGhwUCdxF0Nwg2ggl7EMxYpVi1c4FMwpug+csNhWoXRGrDvaL74YY9QB3R15r5bMMiPIAZA++10C3T58tDRKsiFgSQg8RmIkYLwJJc6P77+knDzPfM/Jvgt+99g0eWaSLz5BzJ/E2/+RuZxE/MpQ7+9CezQWki/6x1Mn3FouV7FdsSBENPLMgT3sdD7EeVXkM1HlNn9Oc75Fef8l3G+W/N60ZKcDALFPzaq0lObIpInCK3VFz3PHch1dtJPabdab6P2AQi64hhutiVE6Q6EoWp5cKqNDz3JzTREmqGEhVbiSrKqS+Qzug6TmmrBBAz6hU9mH3iv7BOWxrmxSgdRXvSocBQb5pKVq6ijmUfXSu4BtphvDBQ2kf61bZXaNIyPZtW1Tltxd8NJch4ESR6wm/QPZfN0QtrbdG5sbCqKvmlq9h0KRliQjT/DHXlVXE+g9T9vXvH1fPotvhDps5er7W6/ExusjktaBTBuFAKQQuJ+y/aoWNAR6WuYgYWiMcG1B8YIwCbAcBkm2PYuAK9YeYGgiCJxoha7Zgj3DtiSK8VvzNvSQhRCIcrPqjHSBHJC3utqXldDdGatI9I34JoiriG83ETVtjYZpNsgQQzerWpAlJSeHNMY0NpaGuHYeJ/z8BYrgV+hP2Bl+m0VcB2NIAjGTsuIC1nT9TEGtpNhdXPXKW6HRe/zCVwN4UOzoLVAl1YAKiK3hjfYmiStR/FVAsC8/SMgsNoTuBT1xl7p4xuKxPeALTiuIFJaQjjG3tFjNeDFNbWpa/9n3Aq2gd56YPHPEmfoqwqYXN+MxK/1yBeVYiSOhFvdfS2kP7rCwfkHbCK6Fhm+KpLtQljGJQNZmPcczmCxMSNeCx30XnrFq8YjMPwLDH6n2h8w6PAU6KqMKYeZmpbJGmrDCSmwEvZvhzmz14IMBqwmg5HyvoEfqsvjpzGixM8rphjgraUcooL/WWiI5sKD0HdMdVtpJmDZXJeM/sR1PN9S0DoImlTPvfUkYA6K2net52Bz7Hv5jjdEhAZDlGOoHC1QHqWSOsARXReAhkbfyIhz6wp0EVTAFOghnitKPr0Lwkd/mx+erDmPcgRHkDcxqzdmOO/masCg/rCPPAW6SJnBM/uNlRjHTjY5YYS17KkHf1QGAb9rx6WIi0RyWDLMBh6uDZzErG2YrloWJZEubNlC9XU4dkjSi8pp8xmADHQf3JcHzn8t6lQOBgWnB1lrcVdD18RKxBhmu701R1Q/wwwobmT7Ul9aDBIBQqcqvDty+F73QcHh37ucZzXHauGZbGrdEzvMUNrzvHJ2xAT3u2/oqMRFzyVtlIG6+mSjiWAYIBaSYoQ4jzRLwC/twjwLEhST7p3O6Q3FOLClu2Ff06YJvC5VX5fCc6RuZh2V4SU9x65QXZYfn/qyEfbx/g/PwhMBKa7oiQGBKA0YOAq66wGLsz0a9Pw9oaDbmXPR8iRlK2jfESoFzEMrHnSlUbjErOnB5bJBT+qeWrNfEPq/AtR8ReifAhReK3k9VEuTOGYwBDRDgaimZLudA4QM+Vn1i/ama2ip+37VgU6uddaHQaZQRco7asSLOGj/2Hw3HeagTztwN3rGfHyO9RCwB0IwgnzTqHqolyG5C1ZYk/ox4IQLkvJ0mmxsRYre5OIdEBg0JaCeh8eGp9xy1GPkMAcGUx8DY2SfkoUXiTe57nNyqc6bXOi7yKm9Q2Fr1fX2U99m/vB9K5u3FG8opqtAexCx1yy/RaaxoR4VpMdtL56NFof6jYUN7vB7gq/w/kACEktYQDqlUzdzor3glzfcsNJrNcBoOeA3TjUO5ffJ7kdyf8NIZoSfGOm5VtET2fr1+pc9biF7X6b/4RsIJeENSyx6lkXbG+6tXmge7oaJiqBKbuy+VonpWV+mjJBdjxnLqbUjpxVsj1UiAuceMIvVEyd3Vykx0cFroXOD7XFjOK3RI2QvEmk9NsRMJJpY7qUvWswc6cixoEfs0reMvL5Fk/QEky6u1QF6X2OCa4Gj2uuzXjNbkJkAZEXrxo357Zd/8M7+VR2a/1SI/00dmm+32EqsUkZvOLZ+X7344KkL4kbReYJ9tOCrJ0YqHZLvESlTz4a16Em95aPHsI36GKhDpaS8UjLn0PICOjUDZMjfXx8ibdKQ1D4XFE5wXEFP7z5HPC8qkEFuvCkBsbkn+hSUkZBfZisUS9+0aGqHdLulu8rDT61t9K1FM8xwABClNUgT0drh/VdFcB//tOyflnG+ej09ptICHKpIjxZRhGn7oMf6x4Vbq8hjHMvRs2q1TSgaS4Mg2QenETNmAo1W8dshFzz9pMttituL5ciK0/Il8MmFLkIfxSLMyo9kKj4pF26nr16W3LQkeuITRdmbrHUveOpE4fIal0CwEg5SKADedguYddtRCUwOzsdAY6ZhcnGor9uGx6T4Ugry/S+8zPwUsflaxZ+wG3aEW1uSdaP9UWMNUR0g9FpKwcw+R9bLFeZPYv1XWzxDMjNSjiAAHdXcWKh+v/QMc6Lg6e72amMMgfQJuSY0ziVPu7UTAayHUoT8DJAd9c0XfUOhSYfoIfqmd5fxREbf2/tyL+C8r8+tEuhbX0lT+oO+sJWIqJ5wnNR/m5ZPWdH34+7DiHpa/9b7/3TL/VdjBP8PgEw+0hggAvQAAABmelRYdFJhdyBwcm9maWxlIHR5cGUgaXB0YwAAeNo9SjESgDAM2vMKn9BCTPU5vbaDm4P/PzGDcEkIYNf9DNsSHsbD4afP4uIPoI4CNslOsGgqpm5oVzLToXTpa+zcjcGviiykxbAX9pUXbioh1HwAAAGFaUNDUElDQyBwcm9maWxlAAB4nH2RPUjDQBzFX1O1Ii0OVhBxyFCdLIiKdtQqFKFCqBVadTC59ENo0pCkuDgKrgUHPxarDi7Oujq4CoLgB4ibm5Oii5T4v7TQIsaD4368u/e4ewcItRLTrI4xQNNtM5WIi5nsihh4RRdC6Mc0YjKzjFlJSsJzfN3Dx9e7KM/yPvfnCKk5iwE+kXiGGaZNvE48tWkbnPeJw6woq8TnxKMmXZD4ketKg984F1wWeGbYTKfmiMPEYqGNlTZmRVMjniSOqJpO+UKmwSrnLc5aqcKa9+QvDOb05SWu0xxCAgtYhAQRCirYQAk2orTqpFhI0X7cwz/o+iVyKeTaACPHPMrQILt+8D/43a2VnxhvJAXjQOeL43wMA4FdoF51nO9jx6mfAP5n4Epv+cs1IPZJerWlRY6A3m3g4rqlKXvA5Q4w8GTIpuxKfppCPg+8n9E3ZYG+W6BntdFbcx+nD0CaukreAAeHwEiBstc83t3d3tu/Z5r9/QDloXLVbp07YwAAD6BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDQuNC4wLUV4aXYyIj4KIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgIHhtbG5zOmlwdGNFeHQ9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBFeHQvMjAwOC0wMi0yOS8iCiAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICB4bWxuczpwbHVzPSJodHRwOi8vbnMudXNlcGx1cy5vcmcvbGRmL3htcC8xLjAvIgogICAgeG1sbnM6R0lNUD0iaHR0cDovL3d3dy5naW1wLm9yZy94bXAvIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgIHhtcE1NOkRvY3VtZW50SUQ9ImdpbXA6ZG9jaWQ6Z2ltcDo2YzExMGY3YS0xZDFkLTQzMGYtYjBjYi01YTk2MWI5MTMxMTUiCiAgIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6YTRjNWVlMjItZmZlYi00YTc4LWFmYWMtNjcwN2MzODRjOGFiIgogICB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NjAyNzNmMmMtNjMxNC00ZmY0LThiYjEtODYzYWEyYmIzZDIwIgogICBHSU1QOkFQST0iMi4wIgogICBHSU1QOlBsYXRmb3JtPSJNYWMgT1MiCiAgIEdJTVA6VGltZVN0YW1wPSIxNjIzNjIxMzgzMTE2NzAyIgogICBHSU1QOlZlcnNpb249IjIuMTAuMjIiCiAgIGRjOkZvcm1hdD0iaW1hZ2UvcG5nIgogICB0aWZmOk9yaWVudGF0aW9uPSIxIgogICB4bXA6Q3JlYXRvclRvb2w9IkdJTVAgMi4xMCI+CiAgIDxpcHRjRXh0OkxvY2F0aW9uQ3JlYXRlZD4KICAgIDxyZGY6QmFnLz4KICAgPC9pcHRjRXh0OkxvY2F0aW9uQ3JlYXRlZD4KICAgPGlwdGNFeHQ6TG9jYXRpb25TaG93bj4KICAgIDxyZGY6QmFnLz4KICAgPC9pcHRjRXh0OkxvY2F0aW9uU2hvd24+CiAgIDxpcHRjRXh0OkFydHdvcmtPck9iamVjdD4KICAgIDxyZGY6QmFnLz4KICAgPC9pcHRjRXh0OkFydHdvcmtPck9iamVjdD4KICAgPGlwdGNFeHQ6UmVnaXN0cnlJZD4KICAgIDxyZGY6QmFnLz4KICAgPC9pcHRjRXh0OlJlZ2lzdHJ5SWQ+CiAgIDx4bXBNTTpIaXN0b3J5PgogICAgPHJkZjpTZXE+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InNhdmVkIgogICAgICBzdEV2dDpjaGFuZ2VkPSIvIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjU1OWU5MWE4LTdhNjgtNGExMC1iOWI2LTA4OGM3M2ZkMjRmZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iR2ltcCAyLjEwIChNYWMgT1MpIgogICAgICBzdEV2dDp3aGVuPSIyMDIxLTA2LTEzVDE3OjU2OjIzLTA0OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICAgPHBsdXM6SW1hZ2VTdXBwbGllcj4KICAgIDxyZGY6U2VxLz4KICAgPC9wbHVzOkltYWdlU3VwcGxpZXI+CiAgIDxwbHVzOkltYWdlQ3JlYXRvcj4KICAgIDxyZGY6U2VxLz4KICAgPC9wbHVzOkltYWdlQ3JlYXRvcj4KICAgPHBsdXM6Q29weXJpZ2h0T3duZXI+CiAgICA8cmRmOlNlcS8+CiAgIDwvcGx1czpDb3B5cmlnaHRPd25lcj4KICAgPHBsdXM6TGljZW5zb3I+CiAgICA8cmRmOlNlcS8+CiAgIDwvcGx1czpMaWNlbnNvcj4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/PqMwn64AAAAGYktHRAD/AP8A/6C9p5MAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQflBg0VOBd51lVLAAAHrUlEQVR42u3csU5cSRRF0XqtF/gbHRI79KcQd+hvJGMSYyHLjJhxPbjn3rXJEao6tdxOei1JkiRJ0tAOR6DNPduYgKU0qGxNwFIcVDYnYCkOKtsTsBQHlQ3KWBQHlS3KSBQHlU3KOBQHlW3KKBQHlY3KGBQHla3KCBQHlc3K5SsOKtuVSweVDctlC1S2LJcsUNk0sAQq25ZLFahsXC5ToLJ1lyhQ2bxcnkBl+3JpoJI34LIEKm9BLkmg8ibkckAlb8OlCFTeiFyGQOWtyCWASt6Mwxeo5O04dFDJG5LDBpW8JYcsUMmbcrigkrclhwoqeWMOU796Wk+/oPqyvjgQraf1tF5twlsDVi2ofg9coPrDJrw5YNWCClygescmvD1g1YIKXKACF7DioAIXqMAFrDiowAUqcAErDipwgQpcwIqDClygAhew4qACF6jABaw4qMAFKnABKw4qcIEKXMCKgwpcoALXULCSoQIXqMA1BKxOUIELVNPhOhqPcszXvIALVFPgOhqOcuz3UYELVN3hOhqN0hfngQtUzeE6GowSVOAC1RC4juBRggpcoBoG1xE4SlCBC1RD4TqCRgkqcIFqOFxHwChBBS5Qgas2WKACF6jAVR4sUIELVOAqDxaowAUqcJUHC1TgAhW4yoMFKnCBClzlwQIVuEAFrvJggQpcoAJXebBABS5Qgas8WKACF6jAVR4sUIELVLoKrm2/DFT6HS5QaTdctx2/5L7uzz/WD7ci6a1/wLZ8oDl3/mEvaH1dX92S/xL6pGUP23/necUfCi7DBJc9XNF55R8OLsMElz3EgAUuwwSXPcSBBS7DBJc9xIEFLsMElz3EgQUuwwSXPcSBBS7DBJc9xIEFLsMElz3EgQUuwwSXPcSBBS7DBJc9xIEFLlCByx7iwAIXqMBlD3FggQtU4Jq9hzP54ME1GypwzdvD2eEiwDUbKnDN2cPZ6WKmwzUdKnD138PZ8aKmwQUqcE3Zw9n54rrDBSpwTdvDOWGo3eACFbim7uGcNNR0uEAFrul7OCcONQ0uUIHLHgaDlQIXqMBlD8AqD5dhgssegFUeLsMElz0AqzxchgkuewBWebgME1z2AKzycBkmuOwBWOXhMkxw2QOwysNlmOCyB2CVh8swwWUPwCoPl2GC6zVc9rCvmyPYC5dx6qXv67s9+IQl1e7b+uYQgCWBCliSQAUsCVQClgQqYEkCFbAkUAlYEqiAJYFKwJJAJWBJoAKWBCoBSwKVgCWBClgSqAQsCVQClkAlYEmgErAkUAlYApWAJYFKwJJAJWAJVAKWBCoBS6CSgCVQCVgSqAQsgUoClkAlYEmgErAEKgFLApUyujkCwUrAkiRgSQKWJAFLkoAlCViSBCxJApYkYEkSsCQJWJKAJUnAkiRgSQLWGz2sBycp6c12fd3Qti/we0Hrvu5uR9JWqLaDBS5JV0F1GVjgkkB1VZd/pzu4JFDFgAUuCVRxYIFLAlUcWOCSQBUHFrgkUMWBBS4JVHFggUsCVRxY4JJAFQcWuCRQxYEFLglUcWCBS5oLVSxY4JLmQRUPFrikOVC1AQtcUn+o2oEFLqkvVG3BApdA1bez+wWCS6ACFrgkUAELXBKogAUugQpY4JJABSxwSaACFrgEKmCBSwIVsMAlUAlY4BKogAUuCVTAApdABSyBS6AC1ki4JFBd180R7O3+80eze/z5I5+wYuDyyWsmVAIWuAQqAQtcAhWwBC5QCVjgEqiAJXAJVMASuEAlYIFLoAKWwAUqAUvgApWABS6BClgCF6gELIELVAIWuAQqYAlcoBKwBC5QCViaCxeogCVwgUrAErhAJWCpPVygApbABSoBS+AClYCl9nCBSsBSebhAJWCpPFygErBUHi5QCVgqDxeoBCyVhwtUApbKwwUqAUvl4QKVgKXycIFKwFK7/ypK7+nmCCQBS5KAJQlYkgQsSQKWJGBJErAkCViSgCVJwJIkYEkCliQBS5I+AazDUUp6q8f1uMWInd+H9fIHPbseSTuhugIscEm6BKorwQKXBKpL+oivSAaXBKoYsMAlgSoOLHBJoIoDC1wSqOLAApcEqjiwwCWBKg4scEmgigMLXBKo4sAClwSqOLDAJQ2HKhEscElDoUoGC1zSMKg6gAUuaQhUncACl9Qcqo5ggUtqClVnsMAlUDXtHHCH4BKogAUuCVTAApcEKmCBS6ACFrgkUAELXAIVqIAFLoEKWOCSQAUscAlUAha4BCpggUsCFbDAJVABS+ASqIAFLoHKKex/ZNrcfd1Hw/WwHrwtOVRwAcubApbABSxvySFrJlyDwPKGHDa4gOXtyKGDC1jejMMXuNqD5a24BHWFqxFY3ojLUHe4GoDlbbgUTYErGCxvwuVoGlyBYHkLLklT4QoCyxsAlqbDFQCW7QNL4CoPls0DS+AqD5atA0vgKg+WjQNL4CoPlm0DS+AqD5ZNA0vgKg+WLQNL4CoPlg0DS+AqD5btAkvgKg+WzQJL4NoL1wVg2aqMQNfAtREsG5Ux6Fq4NoBlmzIKfQxcfwGWTco49LFw/Q+wbFFGos+B6z+AZYMClj4XrneAZXsClmrA9S9g2ZyApVpw/QEsWxOwVBOuV2DZmCRJkiRJ+tv+AXRI31poYVdQAAAAAElFTkSuQmCC'">
      </figure>
      <div @click="copyToClipboard" class="card-body cursor-pointer">
        <h2 class="card-title">{{ name }}
          <div class="badge badge-outline" v-if="rarity == 'EPIC'" style="color: rgb(124,58,170)">EPIC <img v-if="recombobulated" style="width: 20px;" src="./../../assets/recombobulator.png"/></div>
          <div class="badge badge-outline" v-if="rarity == 'LEGENDARY'" style="color: rgb(245,158,11)">LEGENDARY <img v-if="recombobulated" style="width: 20px;" src="./../../assets/recombobulator.png"/></div>
          <div class="badge badge-outline" v-if="rarity == 'COMMON'" style="color: rgb(150,150,200)">COMMON <img v-if="recombobulated" style="width: 20px;" src="./../../assets/recombobulator.png"/></div>
          <div class="badge badge-outline" v-if="rarity == 'MYTHIC'" style="color: rgb(230,100,250)">MYTHIC <img v-if="recombobulated" style="width: 20px;" src="./../../assets/recombobulator.png"/></div>
          <div class="badge badge-outline" v-if="rarity == 'RARE'" style="color: rgb(50,80,255)">RARE <img v-if="recombobulated" style="width: 20px;" src="./../../assets/recombobulator.png"/></div>
          <div class="badge badge-outline" v-if="rarity == 'UNCOMMON'" style="color: rgb(50,255,80)">UNCOMMON <img v-if="recombobulated" style="width: 20px;" src="./../../assets/recombobulator.png"/></div>
          <div class="badge badge-outline" v-if="rarity == 'SUPREME'" style="color: rgb(190,60,60)">SUPREME <img v-if="recombobulated" style="width: 20px;" src="./../../assets/recombobulator.png"/></div>
          <div class="badge badge-outline" v-if="rarity == 'SPECIAL'" style="color: rgb(230,80,50)">SPECIAL <img v-if="recombobulated" style="width: 20px;" src="./../../assets/recombobulator.png"/></div>
          <div class="badge badge-outline" v-if="rarity == 'VERY_SPECIAL'" style="color: rgb(230,80,50)">VERY SPECIAL <img v-if="recombobulated" style="width: 20px;" src="./../../assets/recombobulator.png"/></div>
        </h2>
        <p><span class="opacity-75">Price: </span><span class="font-mono text-2sm">{{ price }}</span></p>
        <p><span class="opacity-75">Est. Resell Price: </span><span class="font-mono text-2sm">{{ resell_price }}</span></p>
        <p><span class="opacity-75">Profit: </span><span class="font-mono text-2sm">{{ profit }}</span></p>
        <p><span class="opacity-75">House Quantity: </span><span class="font-mono text-2sm">{{ house_quantity }}</span></p>
        <p v-if="pet_candies > -1"><span class="opacity-75">Pet Candies: </span><span class="font-mono text-2sm">{{ pet_candies }}/10</span></p>
        <p><span class="opacity-75">Time Remaining: </span>
          <vue-countdown :time="this.ends - Date.now()" :transform="transformSlotProps" v-slot="{ days, hours, minutes, seconds }">
          <span class="font-mono"><span v-if="hours > 0">{{ parseInt(hours) + (parseInt(days)*24) }}h</span><span v-if="minutes > 0">{{ minutes }}m</span><span
          >{{ seconds }}s</span></span>
          </vue-countdown>
        </p>
        <div class="justify-center card-actions bottom-0">
          <button class="copy-cmd btn btn-ghost">Copy Command</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { createToast } from 'mosha-vue-toastify'
import 'mosha-vue-toastify/dist/style.css'
import VueCountdown from '@chenfengyuan/vue-countdown';

export default {
  name: "Flip",
  methods: {
    copyToClipboard() {
      var TempText = document.createElement("input")
      TempText.value = "/viewauction "+this.auction_id
      document.body.appendChild(TempText)
      TempText.select()

      document.execCommand("copy")
      document.body.removeChild(TempText)
      createToast('Copied to Clipboard',
          {
            position: 'bottom-right',
            type: 'success',
            transition: 'zoom',
            showIcon: true
          })
    },
    transformSlotProps(props) {
      const formattedProps = {}

      Object.entries(props).forEach(([key, value]) => {
        formattedProps[key] = value < 10 ? `0${value}` : String(value)
      });

      return formattedProps
    }
  },
  props: {
    name: String,
    image: String,
    rarity: String,
    auction_id: String,
    price: String,
    resell_price: String,
    profit: String,
    pet_candies: Number,
    house_quantity: String,
    ends: Number,
    lore: String,
    recombobulated: Boolean
  },
  components: {
    VueCountdown
  }
}
</script>

<style>
.justAdded {
  display: none !important;
}

.flipIndicator {
  width: auto !important;
}

.justAdded {
  top: 3px !important;
  right: 15px !important;
}

.flipCard {
  height: 400px;
  width: 100%;
  transition: 0.4s ease;
  overflow: visible !important;
}

.itemImage {
  object-fit: scale-down;
  max-height: 100px;
  margin: 0 auto 10px;
  padding: 10px 5px;
  border-radius: .5rem .5rem 0 0;
}

.flipCard .card-body {
  padding-top: 0 !important;
  padding-bottom: 10px !important;
}

.flipCard .card-body {
  text-align: left;
}

.flipCard .card-actions {
  flex-grow: 1;
}

.copy-cmd {
  position: absolute;
  bottom: 0;
  width: 85% !important;
  margin-bottom: 25px !important;
}

.flipIndicator:last-child {
  padding-bottom: 30px;
}
</style>